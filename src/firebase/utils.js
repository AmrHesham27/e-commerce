import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, getRedirectResult, GoogleAuthProvider, signOut } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";

// to start firebase Real time DataBase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
export const db = getFirestore(app);


const auth = getAuth();
// Redirect sign in with google
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithRedirect(auth, provider);

// log out 
export const logOut = () => { signOut(auth).then(() => {
  // Sign-out successful.
  console.log('logged out')
}).catch((error) => {
  // An error happened.
  console.log('error, did not logout')
});
};

// get  User data
export const getUserData = () => getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    return user

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  
 