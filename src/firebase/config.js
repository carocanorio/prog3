import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBf5SLLyHjCENLw2X0INqDfGhZ1hKeUxrQ",
    authDomain: "prueba-71c11.firebaseapp.com",
    projectId: "prueba-71c11",
    storageBucket: "prueba-71c11.appspot.com",
    messagingSenderId: "314134271030",
    appId: "1:314134271030:web:14074f7cb86042637e3497"
  };

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore()

