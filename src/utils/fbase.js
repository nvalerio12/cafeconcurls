import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBrvZydG_mMJXxyo7jjT2Ig4B393tEjc3Q",
    authDomain: "cafeconcurls-73d62.firebaseapp.com",
    projectId: "cafeconcurls-73d62",
    storageBucket: "cafeconcurls-73d62.appspot.com",
    messagingSenderId: "152798552503",
    appId: "1:152798552503:web:9ee3253d5c5fff43bd8832",
    measurementId: "G-NJ05J9SSKX"
}

const fBaseApp = firebase.initializeApp(config);
export const DB = fBaseApp.firestore();
export const {Timestamp} = fBaseApp.firestore;
export const userCollection = DB.collection('users');