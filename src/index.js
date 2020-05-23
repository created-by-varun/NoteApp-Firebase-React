import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    apiKey: "AIzaSyAXr2gFRHWE9D4xu5URP_CFbct_K_4tid8",
    authDomain: "evernote-clone-bbfcf.firebaseapp.com",
    databaseURL: "https://evernote-clone-bbfcf.firebaseio.com",
    projectId: "evernote-clone-bbfcf",
    storageBucket: "evernote-clone-bbfcf.appspot.com",
    messagingSenderId: "970306349017",
    appId: "1:970306349017:web:d41c70db702044bb075bc8"

});



ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
