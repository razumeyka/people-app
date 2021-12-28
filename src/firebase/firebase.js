import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7uFybthxcMtvM89uZbOcR5qdTOrLjAWY",
  authDomain: "people-e69a5.firebaseapp.com",
  databaseURL: "https://people-e69a5-default-rtdb.firebaseio.com",
  projectId: "people-e69a5",
  storageBucket: "people-e69a5.appspot.com",
  messagingSenderId: "792965632658",
  appId: "1:792965632658:web:44ab399910820f53b64c4b",
  measurementId: "G-FLLCNKVNV1"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export default storage;
