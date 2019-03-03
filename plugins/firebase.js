import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

let auth = ''
let firestore = ''

try {
  firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET
  })

  auth = firebase.auth()
  firestore = firebase.firestore()
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  // since app is inialized multiple times
  if (!/already exists/.test(err.message)) {
    // eslint-disable-next-line no-console
    console.error('Firebase initialization error', err.stack)
  }
}

export default {
  auth,
  firestore
}
