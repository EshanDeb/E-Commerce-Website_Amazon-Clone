import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDPP8MluL1t06bWIOUqkIEDsmrZJCGnCGw",
    authDomain: "e-commerce-site-c1971.firebaseapp.com",
    projectId: "e-commerce-site-c1971",
    storageBucket: "e-commerce-site-c1971.appspot.com",
    messagingSenderId: "363372138934",
    appId: "1:363372138934:web:f6dfaac7c6c813f65d3117",
    measurementId: "G-D97G9P3LCS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
