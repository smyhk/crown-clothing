import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCuIRDN64GyLGCGS54uAhh-cf5VYe2Rt4I',
  authDomain: 'crown-clothing-db-9b62d.firebaseapp.com',
  projectId: 'crown-clothing-db-9b62d',
  storageBucket: 'crown-clothing-db-9b62d.appspot.com',
  messagingSenderId: '604249990671',
  appId: '1:604249990671:web:4461c3919392f42cb8257a',
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

// Specific to Google's interface
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// Goole stuff
export const auth = getAuth();
export const db = getFirestore();

// Add a collection of documents to firestore in one batch
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field = 'title'
) => {
  const collectionRef = collection(db, collectionKey);

  // Batch object to execute multriple writes at once
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object[field].toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.info('Data write complete.');
};

// Get shop data from firebase
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

// Display google popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// Save new users to firestore when using google popup
export const createUserDocumentFromAuth = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // save user to firestore
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('error creating the user', error.messsage);
    }
  }

  // if user already exists
  return userDocRef;
};

// Save new users to firestore when using email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// Sign in user with email an password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// Sign out user
export const signOutUser = async () => signOut(auth);

// Observer
export const onAuthStateChangedListener = callback => {
  onAuthStateChanged(auth, callback);
};
