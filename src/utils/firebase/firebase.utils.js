import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

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
const firebaseApp = initializeApp(firebaseConfig);

// Specific to Google's interface
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
