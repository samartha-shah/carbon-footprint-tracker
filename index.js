import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Initialize Firebase
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics'; // Commented out
const firebaseConfig = {
  apiKey: "AIzaSyC_QWnAGanQNrJYn0ntLxKZSbQEG2SQYOI",
  authDomain: "carbon-footprint-9a5f7.firebaseapp.com",
  projectId: "carbon-footprint-9a5f7",
  storageBucket: "carbon-footprint-9a5f7.firebasestorage.app",
  messagingSenderId: "59617838214",
  appId: "1:59617838214:web:5e39ed062a417e7cbf3d07",
  measurementId: "G-7Z64FH94Y7"
};
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Commented out

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
