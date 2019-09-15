import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/**** Replace with your app configuration info ****/
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyA70f-MKi8ZzvbI0PGq8uSyRm5lrr7XxeE',
  authDomain: 'crown-db-76911.firebaseapp.com',
  databaseURL: 'https://crown-db-76911.firebaseio.com',
  projectId: 'crown-db-76911',
  storageBucket: '',
  messagingSenderId: '457361612286',
  appId: '1:457361612286:web:d8428a99fd93163d65f4af'
};
/*************************************************/

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.error('Error creating user', err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); // trigger google popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
