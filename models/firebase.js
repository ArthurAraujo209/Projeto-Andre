const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../firebase-key.json'); // Certifique-se de que o caminho está correto

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
module.exports = db;