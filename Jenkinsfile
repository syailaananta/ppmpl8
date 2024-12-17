pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stages {
            stage('Checkout') {
                steps {
                    script {
                        def branch = env.BRANCH_NAME
                        if (branch == 'main') {
                            git url: 'https://github.com/username/node-ci-cd.git', branch: 'main'
                        } else {
                            git url: 'https://github.com/username/node-ci-cd.git', branch: 'develop'
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
                // Tambahkan perintah build jika diperlukan
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Tambahkan perintah deploy jika diperlukan
            }
        }
        stage('Run Integration Tests') {
             steps {
                 sh 'npm run integration-test'
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
        }
        failure {
            echo 'Pipeline failed!'
        }
    }

    post {
    success {
        emailext subject: 'Build Succeeded', body: 'The build succeeded!',
        recipientProviders: [[$class: 'DevelopersRecipientProvider']]
    }
    failure {
        emailext subject: 'Build Failed', body: 'The build failed.',
        recipientProviders: [[$class: 'DevelopersRecipientProvider']]
    }
}

}
