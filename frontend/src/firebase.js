import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBbsNgXIJwymAzjNll8QF2wgqw4GnCZOKs",
  authDomain: "powerup-hardware-auth-dev.firebaseapp.com",
  projectId: "powerup-hardware-auth-dev",
  storageBucket: "powerup-hardware-auth-dev.appspot.com",
  messagingSenderId: "1062318995346",
  appId: "1:1062318995346:web:c63b17f4fa022c550f334b"
  })

export const auth = firebase.auth(app)
export default app
