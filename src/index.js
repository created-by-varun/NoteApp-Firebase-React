import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyAlY_slsDu73_h15bnNpyhh311KN5D1BWw",
  authDomain: "note-app-66750.firebaseapp.com",
  databaseURL: "https://note-app-66750.firebaseio.com",
  projectId: "note-app-66750",
  storageBucket: "note-app-66750.appspot.com",
  messagingSenderId: "734472648633",
  appId: "1:734472648633:web:6e422a9f56ac3ba777e868",
  measurementId: "G-PZPF0N5Z45"
});



ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
