import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyD8Xg6HDvtLbPL_nDZhkydW7fIXE0kPnAc",
    authDomain: "vue-crud-cc911.firebaseapp.com",
    databaseURL: "https://vue-crud-cc911.firebaseio.com",
    projectId: "vue-crud-cc911",
    storageBucket: "vue-crud-cc911.appspot.com",
    messagingSenderId: "348422071945",
    appId: "1:348422071945:web:ea80f1f519e2751f410858"
  })
  .firestore();

export const postRef = db.collection("posts");


