import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDRmIfcBpwDRo1o0BX_BT5uihVa5MqFSpE',
  authDomain: 'clothing-db-6b090.firebaseapp.com',
  projectId: 'clothing-db-6b090',
  storageBucket: 'clothing-db-6b090.appspot.com',
  messagingSenderId: '881823342423',
  appId: '1:881823342423:web:02392813f762f8a54f2812',
  measurementId: 'G-4C0ED0S7M1',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
