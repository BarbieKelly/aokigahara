import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyBoZ0FjTaq_xUNXPsZAgNKm5syQchJrkts",
    authDomain: "aokigahara.firebaseapp.com",
    databaseURL: "https://aokigahara.firebaseio.com",
    projectId: "aokigahara",
    storageBucket: "aokigahara.appspot.com",
    messagingSenderId: "203352096461",
    appId: "1:203352096461:web:72591e4204fdf603f93384"
    };

export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if (!userAuth) return;

     const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot= await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;

    console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;