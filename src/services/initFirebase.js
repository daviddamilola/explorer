import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"


export default function initFirebase() {
    let app;
  // Init firebase
  if (!getApps().length) {
    app = initializeApp({
      apiKey: process.env.NEXT_PUBLIC_apiKey,
      authDomain: process.env.NEXT_PUBLIC_authDomain,
      projectId: process.env.NEXT_PUBLIC_projectId,
      storageBucket: process.env.NEXT_PUBLIC_storageBucket,
      messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
      appId: process.env.NEXT_PUBLIC_appId,
      measurementId: process.env.NEXT_PUBLIC_measurementId,
    });
  } else {
      app = getApp(); // if already initialized, use that one
  }

  const db = getFirestore(app)
  const auth = () => getAuth(app)

  return {
      db,
      auth
  }
}
