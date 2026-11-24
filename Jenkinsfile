
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm.cmd ci'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm.cmd test'
            }
        }
    }

    post {
        success {
            echo 'CODERWANDA WebApp pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}
