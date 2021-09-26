import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0E8zAa8XT_KK8jvXCnVC4I0oUuTYqL3I",
  authDomain: "disneyplus-clone-dfc3d.firebaseapp.com",
  projectId: "disneyplus-clone-dfc3d",
  storageBucket: "disneyplus-clone-dfc3d.appspot.com",
  messagingSenderId: "979820267987",
  appId: "1:979820267987:web:9ba8cd8a449fbec0474726",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
