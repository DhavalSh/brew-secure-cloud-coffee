
pipeline {
    agent any
    
    tools {
        // Use the name that matches your Jenkins configuration
        maven 'Maven' // For SonarQube scanning
    }
    
    environment {
        DOCKER_IMAGE = 'starbucks-clone'
        DOCKER_TAG = "${env.BUILD_NUMBER}"
        SCANNER_HOME = tool 'SonarQubeScanner' // Make sure this is configured in Jenkins
        AWS_REGION = 'us-east-1' // Change to your region
        ECR_REPOSITORY = '123456789012.dkr.ecr.us-east-1.amazonaws.com/starbucks-clone' // Replace with your actual ECR repo
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Static Code Analysis') {
            steps {
                sh 'npm run lint || true' // Add a linting script to package.json
            }
        }
        
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh "${SCANNER_HOME}/bin/sonar-scanner \
                        -Dsonar.projectKey=starbucks-clone \
                        -Dsonar.projectName='Starbucks Clone' \
                        -Dsonar.sources=src"
                }
            }
        }
        
        stage('Security Scan') {
            steps {
                sh 'npm audit || true'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Docker Build') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${ECR_REPOSITORY}:${DOCKER_TAG}"
                sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${ECR_REPOSITORY}:latest"
            }
        }
        
        stage('Docker Security Scan') {
            steps {
                sh "trivy image ${DOCKER_IMAGE}:${DOCKER_TAG} --severity HIGH,CRITICAL || true"
            }
        }
        
        stage('Push to ECR') {
            steps {
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', 
                                  credentialsId: 'aws-credentials', 
                                  accessKeyVariable: 'AWS_ACCESS_KEY_ID', 
                                  secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                    sh "aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REPOSITORY}"
                    sh "docker push ${ECR_REPOSITORY}:${DOCKER_TAG}"
                    sh "docker push ${ECR_REPOSITORY}:latest"
                }
            }
        }
        
        stage('Deploy to ECS') {
            steps {
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', 
                                  credentialsId: 'aws-credentials', 
                                  accessKeyVariable: 'AWS_ACCESS_KEY_ID', 
                                  secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                    sh "aws ecs update-service --cluster starbucks-cluster --service starbucks-service --force-new-deployment --region ${AWS_REGION}"
                }
            }
        }
        
        stage('Integration Test') {
            steps {
                echo 'Running integration tests...'
                // Add your integration test commands here
            }
        }
    }
    
    post {
        always {
            // Clean up Docker images
            sh "docker rmi ${DOCKER_IMAGE}:${DOCKER_TAG} || true"
            sh "docker rmi ${ECR_REPOSITORY}:${DOCKER_TAG} || true"
            sh "docker rmi ${ECR_REPOSITORY}:latest || true"
        }
        
        success {
            echo 'Pipeline completed successfully!'
        }
        
        failure {
            echo 'Pipeline failed!'
        }
    }
}
