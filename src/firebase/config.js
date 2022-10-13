import {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBf5SLLyHjCENLw2X0INqDfGhZ1hKeUxrQ",
    authDomain: "prueba-71c11.firebaseapp.com",
    projectId: "prueba-71c11",
    storageBucket: "prueba-71c11.appspot.com",
    messagingSenderId: "314134271030",
    appId: "1:314134271030:web:14074f7cb86042637e3497"
  };

const app = initializeApp(firebaseConfig);

export const auth = firebase.auth();

auth.createUserWithEmailAndPassword('caro@gmail.com', 'caro123');

auth.signInWithEmailAndPassword('caro@gmail.com', 'caro123')