/** @format */

// import firebase from "firebase/compat/app";
// import firebase from "firebase/compat/app"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
// import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBJz4z15ig7bOlTs8zrFaosiwycRC0hx7o",
  authDomain: "farmland-89e6d.firebaseapp.com",
  databaseURL: "https://farmland-89e6d-default-rtdb.firebaseio.com",
  projectId: "farmland-89e6d",
  storageBucket: "farmland-89e6d.appspot.com",
  messagingSenderId: "288435387826",
  appId: "1:288435387826:web:13e4ff20e72c61eec078ab",
  measurementId: "G-GFENF74M0L"
};
const app = initializeApp(firebaseConfig);
//export const auth=app.auth()
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// const stor=firebase.storage();
export default app;
