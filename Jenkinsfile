node{
docker.image('node:6-alpine')
stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run'){
            steps{
                sh 'npm start'
            }
        }
}