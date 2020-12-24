import * as firebase from "firebase";
import '@firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC5ICj1R1DufqPGa630j-kTS0wwG-2eABA",
    authDomain: "kacbasar-a264a.firebaseapp.com",
    projectId: "kacbasar-a264a",
    storageBucket: "kacbasar-a264a.appspot.com",
    messagingSenderId: "563413845395",
    appId: "1:563413845395:web:a3057314033bae4151d466",
    measurementId: "G-BDXJNKEZSX"
};

firebase.default.initializeApp(firebaseConfig); 

storage = firebase.storage

export default storage;