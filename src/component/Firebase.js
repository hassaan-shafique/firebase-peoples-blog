

import { initializeApp } from "firebase/app";
import { Database } from "firebase/database";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD6hjz8EFryOD3C9Sn9DJXKJVNquIdW37g",
  authDomain: "crud-app-react-ab87b.firebaseapp.com",
  projectId: "crud-app-react-ab87b",
  storageBucket: "crud-app-react-ab87b.appspot.com",
  messagingSenderId: "809454890698",
  appId: "1:809454890698:web:617b7b2694d8f972d3ce33",
  databaseURl:"https://console.firebase.google.com/project/crud-app-react-ab87b/database/crud-app-react-ab87b-default-rtdb/data/~2F"
};

export const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
