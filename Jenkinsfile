pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Checkout') {
            steps {
                script {
                    def branch = env.BRANCH_NAME
                    if (branch == 'main') {
                        git url: 'https://github.com/syailaananta/ppmpl8.git', branch: 'main'
                    } else {
                        git url: 'https://github.com/syailaananta/ppmpl8.git', branch: 'develop'
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Unit Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Run Integration Tests') {
            steps {
                sh 'npm run integration-test'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
            }
        }

        stage('Deploy to Staging') {
            steps {
                sh './deploy.sh'
            }
        }
    }
    post {
        success {
            echo 'Pipeline finished successfully!'
            emailext subject: 'Build Succeeded', body: 'The build succeeded!',
            recipientProviders: [[$class: 'DevelopersRecipientProvider']]
        }
        failure {
            echo 'Pipeline failed!'
            emailext subject: 'Build Failed', body: 'The build failed.',
            recipientProviders: [[$class: 'DevelopersRecipientProvider']]
        }
    }
}