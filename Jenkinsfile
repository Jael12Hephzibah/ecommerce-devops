pipeline {
  agent any

  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
    DOCKERHUB_USER = 'jaelheph' // Your Docker Hub username
  }

  stages {
    stage('Checkout Code') {
      steps {
        git branch: 'main', url: 'https://github.com/Jael12Hephzibah/ecommerce-devops.git'
      }
    }

    stage('Build and Push Images') {
      steps {
        script {
          def services = ['product-service', 'order-service', 'cart-service']

          for (service in services) {
            echo "🚧 Building and pushing Docker image for ${service}..."

            // Build Docker image
            def image = docker.build("${DOCKERHUB_USER}/${service}", "${service}")

            // Push image to Docker Hub
            docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS) {
              image.push("latest")
            }

            echo "✅ Successfully pushed ${DOCKERHUB_USER}/${service}:latest to Docker Hub"
          }
        }
      }
    }

    stage('Test') {
      steps {
        echo 'Running basic tests...'
      }
    }
  }

  post {
    success {
      echo '🎉 All microservice images built and pushed successfully!'
    }
    failure {
      echo '❌ Pipeline failed. Check logs for details.'
    }
  }
}
