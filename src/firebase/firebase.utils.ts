import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAKoKJCdrSAoJQD0anADD2lytq2X3uLWV0',
  authDomain: 'grwn-clothing.firebaseapp.com',
  projectId: 'grwn-clothing',
  storageBucket: 'grwn-clothing.appspot.com',
  messagingSenderId: '588836122248',
  appId: '1:588836122248:web:2b82121da5bd2b92ccf93d',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

signInWithGoogle();

export default firebase;
