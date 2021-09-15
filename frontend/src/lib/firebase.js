import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/functions'

firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
})

const db = firebase.firestore()
const func = firebase.functions()
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

// eslint-disable-next-line no-restricted-globals
//Used for dev access via mobile
if (window.location.hostname.includes('192')) {
  db.useEmulator(window.location.hostname, 8080)
  func.useEmulator(window.location.hostname, 5001)
}

// eslint-disable-next-line no-restricted-globals
//Used for dev access via desktop
if (window.location.hostname === 'localhost') {
  db.useEmulator('localhost', 8080)
  func.useEmulator('localhost', 5001)
}

export { firebase, db, func, serverTimestamp }
