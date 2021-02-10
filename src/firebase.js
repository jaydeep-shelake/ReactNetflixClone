import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBLuPklfwKiCTKVmHX11tiqDfuOcwqnKiw",
    authDomain: "netflixreactclone-93749.firebaseapp.com",
    projectId: "netflixreactclone-93749",
    storageBucket: "netflixreactclone-93749.appspot.com",
    messagingSenderId: "575960038426",
    appId: "1:575960038426:web:da4737bd153bab255025a3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;