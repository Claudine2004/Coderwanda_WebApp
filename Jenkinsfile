
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

        stage('Deploy with Docker') {
            steps {
                bat '"C:\\Users\\DEFAULT.DESKTOP-MKB5J3F\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe" build -t coderwanda-webapp:1.0 .'

                bat '"C:\\Users\\DEFAULT.DESKTOP-MKB5J3F\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe" rm -f coderwanda-container 2>NUL'

                bat '"C:\\Users\\DEFAULT.DESKTOP-MKB5J3F\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe" run -d -p 3000:3000 --name coderwanda-container coderwanda-webapp:1.0'
            }
        }
    }

    post {
        success {
            echo 'CODERWANDA WebApp pipeline and Docker deployment completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}
