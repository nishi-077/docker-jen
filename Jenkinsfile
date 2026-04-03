pipeline{
  agent any

  stages{
    stage('Checkout'){
        steps{
          git branch:'main', url: 'https://github.com/nishi-077/docker-jen.git'
        }
      }
    stage('Build Docker Images') {
            steps {
                bat 'docker build -t htmlpage -f Dockerfile.1 .'
                bat 'docker build -t mynode -f Dockerfile.node .'
            }
       }
    stage('Stop Old Containers') {
            steps{
              bat 'docker stop html-container || exit 0'
              bat 'docker rm html-container || exit 0'
              bat 'docker stop node-container || exit 0'
              bat 'docker rm node-container || exit 0'
            }
        }
   stage('Run Image-Containerize') {
            steps{
                bat 'docker run -d --name html-container -p 2000:80 htmlpage'
                bat 'docker run -d --name node-container -p 2001:3000 mynode'
      }
    }
    stage('Verify') {
            steps {
                bat 'docker ps'
            }
        }
    }
}
