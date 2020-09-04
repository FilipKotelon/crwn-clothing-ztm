import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDN1s387aiFcZCQWmHwbK79RbclIeCB5uY",
  authDomain: "crwn-shop-db-3252b.firebaseapp.com",
  databaseURL: "https://crwn-shop-db-3252b.firebaseio.com",
  projectId: "crwn-shop-db-3252b",
  storageBucket: "crwn-shop-db-3252b.appspot.com",
  messagingSenderId: "667626974529",
  appId: "1:667626974529:web:bbb959516c0d47b21285c0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;