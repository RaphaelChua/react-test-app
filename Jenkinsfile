pipeline {
  agent any
  stages {
    stage('Initialise') {
      steps {
        bat 'yarn install'
      }
    }

    stage('Test') {
      steps {
        bat 'yarn test'
      }
    }

    stage('Publish') {
      steps {
        bat 'yarn build'
        bat 'del /S C:\\website-react\\*'
      }
    }

  }
}