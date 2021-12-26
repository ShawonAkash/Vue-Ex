import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCNaWHOI3gLl6bO3gAXlOcERRawx0QA0o0",
  authDomain: "vuex-4-auth-6b2d3.firebaseapp.com",
  projectId: "vuex-4-auth-6b2d3",
  storageBucket: "vuex-4-auth-6b2d3.appspot.com",
  messagingSenderId: "299441805523",
  appId: "1:299441805523:web:62a04ab07cf0a6eab75c26"
};

//init firebase
initializeApp(firebaseConfig)
//init firebase auth
const auth = getAuth()

export { auth }