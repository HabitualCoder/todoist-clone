import firebase from 'firebase';

const config = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const firebaseConfig = firebase.initializeApp(config);

export {
    firebaseConfig as firebase
};