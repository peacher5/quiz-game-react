import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyAeyZQKaGRHDqHvW5G53nAfXdrOwM12CnI',
  authDomain: 'quiz-game-with-react.firebaseapp.com',
  databaseURL: 'https://quiz-game-with-react.firebaseio.com',
  projectId: 'quiz-game-with-react',
  storageBucket: 'quiz-game-with-react.appspot.com',
  messagingSenderId: '720842053675',
  appId: '1:720842053675:web:e2885a9d2e7351160a326e'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase }
