pipeline{
  agent any

  stages{
    stage('Checkout'){
        steps{
          git 'https://github.com/nishi-077/docker-jen.git'
        }
      }
    stage('Build Docker Images') {
            steps {
                bat 'docker build -t html-page -f Dockerfile.1 .'
                bat 'docker build -t node-app -f Dockerfile.node .'
            }
       }
    stage('Stop Old Containers') {
            steps{
               bat 'docker stop mycont || exit 0' 
                bat 'docker rm mycont || exit 0'
            }
        }
   stage('Run Image-Containerize') {
            steps{
                bat 'docker run -d --name html-container -p 2000:80 html-page'
                bat 'docker run -d --name node-container -p 2001:3000 node-app'
      }
    }
    stage('Verify') {
            steps {
                bat 'docker ps'
            }
        }
    }
}
