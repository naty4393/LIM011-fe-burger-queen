import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase.initializeApp({
    apiKey: "AIzaSyDwMhwThxyVxbcYZebyTrSuYujpInsb-FU",
    authDomain: "burger-queen-f82b8.firebaseapp.com",
    databaseURL: "https://burger-queen-f82b8.firebaseio.com",
    projectId: "burger-queen-f82b8",
    storageBucket: "burger-queen-f82b8.appspot.com",
    messagingSenderId: "878038951366",
    appId: "1:878038951366:web:c9b2d097c710716fd47ec7"
  }).firestore()