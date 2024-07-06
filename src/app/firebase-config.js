import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDicEXZqtVOwNtkOZj9vc2O62vwlclLL2M",
  authDomain: "testing-852e5.firebaseapp.com",
  projectId: "testing-852e5",
  storageBucket: "testing-852e5.appspot.com",
  messagingSenderId: "343363097741",
  appId: "1:343363097741:web:f92caa61d9d08f16ac7ec4",
  measurementId: "G-RMJ70FB0SM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
