import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAxh2H_EEeUbMluZzaGZB0pkkLqDblHIIQ",
    authDomain: "pagolineamobile.firebaseapp.com",
    databaseURL: "https://pagolineamobile.firebaseio.com",
    projectId: "pagolineamobile",
    storageBucket: "pagolineamobile.appspot.com",
    messagingSenderId: "890240569469",
    appId: "1:890240569469:web:016f4d05b9806b2215a114"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);