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
        bat 'del /f/s/q C:\\website-react\\* && for /d %x in (C:\\website-react\\*) do rd /s /q "%x"'
        bat 'xcopy "C:\\Windows\\System32\\config\\systemprofile\\AppData\\Local\\Jenkins.jenkins\\workspace\\react-test-app_main\\build" "C:\\website-react" /h /i /c /k /e /r /y'
      }
    }

  }
}