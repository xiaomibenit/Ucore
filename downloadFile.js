const admin = require('firebase-admin');
const serviceAccount = require('path/to/your/serviceAccountKey.json'); // Frissítsd a szolgáltatási fiókkulcs elérési útvonalát

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'films-bcc81.appspot.com' // Frissítsd a tároló nevét
});

const bucket = admin.storage().bucket();

// A letöltendő fájl neve a Firebase Storage-ban
const fileName = 'path/to/your/file.mp4'; // Frissítsd a fájl nevét és elérési útvonalát

// Lokális fájl elérési útvonala, ahova a fájlt letöltjük
const localFilePath = 'path/to/your/local/file.mp4'; // Frissítsd a lokális fájl nevét és elérési útvonalát

// Fájl letöltése a Firebase Storage-ból
bucket.file(fileName).download({ destination: localFilePath })
  .then(() => {
    console.log('A fájl sikeresen letöltve.');
  })
  .catch((error) => {
    console.error('Hiba történt a fájl letöltése során:', error);
  });
