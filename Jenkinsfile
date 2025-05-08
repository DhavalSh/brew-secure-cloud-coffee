
pipeline {
    agent any

    tools {
        jdk 'jdk17'          // Must be configured in Jenkins Global Tool Configuration
        nodejs 'node16'      // Requires NodeJS plugin and named node16 in Jenkins
    }

    environment {
        SCANNER_HOME = tool 'sonar-scanner' // Must be defined in Global Tool Config
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
                        -Dsonar.projectKey=starbucks
                    '''
                }
            }
        }

        stage("Quality Gate") {
            steps {
                script {
                    waitForQualityGate abortPipeline: false, credentialsId: 'Sonar-token'
                }
            }
        }

        stage("Install NPM Dependencies") {
            steps {
                sh "npm install"
            }
        }

        stage("OWASP FS Scan") {
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

        stage("Build") {
            steps {
                sh "npm run build"
            }
        }

        stage("Build Docker Image") {
            steps {
                sh "docker build -t starbucks ."
            }
        }

        stage("Tag & Push to DockerHub") {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'docker') {
                        sh "docker tag starbucks vijaygiduthuri/starbucks:latest"
                        sh "docker push vijaygiduthuri/starbucks:latest"
                    }
                }
            }
        }

        stage("Docker Scout Image Scan") {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'docker', toolName: 'docker') {
                        sh 'docker-scout quickview vijaygiduthuri/starbucks:latest'
                        sh 'docker-scout cves vijaygiduthuri/starbucks:latest'
                        sh 'docker-scout recommendations vijaygiduthuri/starbucks:latest'
                    }
                }
            }
        }

        stage("Deploy to Container") {
            steps {
                sh 'docker run -d --name starbucks -p 3000:3000 vijaygiduthuri/starbucks:latest'
            }
        }
    }

    post {
        always {
            emailext attachLog: true,
                subject: "'${currentBuild.result}'",
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
                to: 'ai.redmine@gmail.com',
                mimeType: 'text/html',
                attachmentsPattern: 'trivy.txt'
            
            // Clean up Docker container and image
            sh "docker stop starbucks || true"
            sh "docker rm starbucks || true"
        }
    }
}
