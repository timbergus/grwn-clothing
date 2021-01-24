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

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData: any,
) => {
  if (userAuth) {
    const userRef = firestore.collection('users').doc(userAuth.uid);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.log(error.message);
      }
    }
    return userRef;
  }
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
