import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCARaB0qJdxnQhlacP3-kFR9GMBCShXrNk",

  authDomain: "cyberpunk-character-hunt.firebaseapp.com",

  projectId: "cyberpunk-character-hunt",

  storageBucket: "cyberpunk-character-hunt.appspot.com",

  messagingSenderId: "362032815844",

  appId: "1:362032815844:web:340b449ca73e8c5c9616f1"

};


ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
