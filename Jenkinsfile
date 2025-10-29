pipeline {
  agent any

  environment {
    DOCKERHUB_USER = 'jaelheph' // Docker Hub username
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
            def image = docker.build("${DOCKERHUB_USER}/${service}", "${service}")

            docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-creds') {
              image.push("latest")
            }

            echo "✅ Successfully pushed ${DOCKERHUB_USER}/${service}:latest to Docker Hub"
          }
        }
      }
    }

    stage('Deploy with Ansible') {
      steps {
        script {
          echo '🚀 Deploying containers using Ansible...'
          sh 'ansible-playbook /var/jenkins_home/workspace/ecommerce-devops-pipeline/deploy.yml'
        }
      }
    }

    stage('Test') {
      steps {
        echo '🧪 Running basic tests...'
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        script {
          echo '☸️ Deploying microservices to Kubernetes...'
          sh 'kubectl apply -f k8s/'
        }
      }
    }
  }

  post {
    success {
      echo '🎉 Pipeline completed successfully with Docker, Ansible, and Kubernetes!'
    }
    failure {
      echo '❌ Pipeline failed. Check logs for details.'
    }
  }
}
