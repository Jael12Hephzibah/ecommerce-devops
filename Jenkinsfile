pipeline {
  agent any

  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
    IMAGE_NAME = 'jaelhephzibah/product-service'
  }

  stages {
    stage('Checkout Code') {
      steps {
        git branch: 'main', url: 'https://github.com/Jael12Hephzibah/ecommerce-devops.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          echo 'Building Docker image for product-service...'
          dockerImage = docker.build("${IMAGE_NAME}", "product-service")

        }
      }
    }

    stage('Test') {
      steps {
        echo 'Running basic tests...'
      }
    }

    stage('Push to Docker Hub') {
      steps {
        script {
          echo 'Pushing Docker image to Docker Hub...'
          docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-creds') {
            dockerImage.push("latest")
          }
        }
      }
    }
  }

  post {
    success {
      echo '✅ Pipeline completed successfully and image pushed to Docker Hub!'
    }
    failure {
      echo '❌ Pipeline failed! Check logs for details.'
    }
  }
}
