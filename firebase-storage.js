const firebase = require('firebase/app');
require('firebase/storage');

module.exports = { storage: firebase.storage() };