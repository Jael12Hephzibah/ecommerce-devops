pipeline {
  agent any

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
          docker.build('jaelhephzibah/product-service')
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
        echo 'Docker push will be added after credentials setup.'
      }
    }
  }

  post {
    success {
      echo 'Pipeline completed successfully 🎉'
    }
    failure {
      echo 'Pipeline failed ❌'
    }
  }
}
