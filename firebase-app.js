const firebase = require('firebase/app');
require('firebase/storage');

const FirebaseApp = firebase.app;
const initializeApp = firebase.initializeApp;

module.exports = { FirebaseApp, initializeApp };