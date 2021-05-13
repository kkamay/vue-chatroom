import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB_YdTn9qroQGyrYLzdVgiEd5_a8y9juHo",
    authDomain: "vue-chatroom-90813.firebaseapp.com",
    projectId: "vue-chatroom-90813",
    storageBucket: "vue-chatroom-90813.appspot.com",
    messagingSenderId: "1081772566957",
    appId: "1:1081772566957:web:a2cd1a807ae2c9ab535924"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const projectAuth = firebase.auth();

export { projectFirestore, timestamp, projectAuth }