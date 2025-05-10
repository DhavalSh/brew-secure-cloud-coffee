
pipeline {
    agent any
    
    // Update these tool configurations based on what's available in your Jenkins
    tools {
        // These need to match exactly the names configured in Jenkins Global Tool Configuration
        jdk 'jdk17'
        maven 'maven3'
    }
    
    environment {
        SCANNER_HOME = tool 'sonar-scanner'
        DOCKER_IMAGE = "starbucks-app"
        DOCKER_TAG = "${BUILD_NUMBER}"
        DOCKERHUB_CREDENTIALS = credentials('docker-hub')
    }
    
    stages {
        stage ("Clean Workspace") {
            steps {
                cleanWs()
            }
        }
        
        stage ("Git Checkout") {
            steps {
                git branch: 'main', url: 'https://github.com/YOUR-USERNAME/YOUR-REPO.git'
            }
        }
        
        stage("SonarQube Analysis") {
            steps {
                withSonarQubeEnv('sonar-server') {
                    sh '''
                        $SCANNER_HOME/bin/sonar-scanner \
                        -Dsonar.projectName=starbucks \
                        -Dsonar.projectKey=starbucks \
                        -Dsonar.sources=src/ \
                        -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
                    '''
                }
            }
        }
        
        stage("Quality Gate") {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    waitForQualityGate abortPipeline: false, credentialsId: 'Sonar-token'
                }
            }
        }
        
        stage("Install NPM Dependencies") {
            steps {
                sh "npm install"
            }
        }
        
        stage("Build Application") {
            steps {
                sh "npm run build"
            }
        }
        
        stage("OWASP Dependency Check") {
            steps {
                dependencyCheck additionalArguments: '--scan ./ --disableYarnAudit --disableNodeAudit', odcInstallation: 'DP-Check'
                dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
            }
        }
        
        stage("Trivy File Scan") {
            steps {
                sh "trivy fs . > trivy.txt"
            }
        }
        
        stage("Build Docker Image") {
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
            }
        }
        
        stage("Tag & Push to DockerHub") {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} \$DOCKERHUB_CREDENTIALS_USR/${DOCKER_IMAGE}:${DOCKER_TAG}"
                sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} \$DOCKERHUB_CREDENTIALS_USR/${DOCKER_IMAGE}:latest"
                sh "docker push \$DOCKERHUB_CREDENTIALS_USR/${DOCKER_IMAGE}:${DOCKER_TAG}"
                sh "docker push \$DOCKERHUB_CREDENTIALS_USR/${DOCKER_IMAGE}:latest"
            }
        }
        
        stage("Security Scan Docker Image") {
            steps {
                sh "trivy image \$DOCKERHUB_CREDENTIALS_USR/${DOCKER_IMAGE}:${DOCKER_TAG} > trivy-docker-report.txt"
            }
        }
        
        stage("Deploy Container") {
            steps {
                sh "docker-compose down || true"
                sh "docker-compose up -d"
            }
        }
    }
    
    post {
        always {
            // Send email with build results
            emailext attachLog: true,
                subject: "${currentBuild.result}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
                body: """
                    <html>
                    <body>
                        <div style="background-color: #FFA07A; padding: 10px;">
                            <p style="color: white; font-weight: bold;">Project: ${env.JOB_NAME}</p>
                        </div>
                        <div style="background-color: #90EE90; padding: 10px;">
                            <p style="color: white; font-weight: bold;">Build Number: ${env.BUILD_NUMBER}</p>
                        </div>
                        <div style="background-color: #87CEEB; padding: 10px;">
                            <p style="color: white; font-weight: bold;">URL: ${env.BUILD_URL}</p>
                        </div>
                    </body>
                    </html>
                """,
                to: 'your-email@example.com',
                mimeType: 'text/html',
                attachmentsPattern: 'trivy*.txt'
            
            // Clean up Docker resources
            sh "docker-compose down || true"
            sh "docker rmi ${DOCKER_IMAGE}:${DOCKER_TAG} || true"
            sh "docker rmi ${DOCKER_IMAGE}:latest || true"
            sh "docker rmi \$DOCKERHUB_CREDENTIALS_USR/${DOCKER_IMAGE}:${DOCKER_TAG} || true"
            sh "docker rmi \$DOCKERHUB_CREDENTIALS_USR/${DOCKER_IMAGE}:latest || true"
            sh "docker logout"
        }
    }
}
