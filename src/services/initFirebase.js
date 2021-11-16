import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/remote-config";

export default function initFirebase() {
  // Init firebase
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: process.env.NEXT_PUBLIC_apiKey,
      authDomain: process.env.NEXT_PUBLIC_authDomain,
      projectId: process.env.NEXT_PUBLIC_projectId,
      storageBucket: process.env.NEXT_PUBLIC_storageBucket,
      messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
      appId: process.env.NEXT_PUBLIC_appId,
      measurementId: process.env.NEXT_PUBLIC_measurementId,
    });
  } else {
    firebase.app(); // if already initialized, use that one
  }

  return firebase;
}
