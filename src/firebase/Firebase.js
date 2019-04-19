import Firebase from 'firebase';
let config = {
    apiKey: "<apiKey>",
    authDomain: "<authDomain>",
    databaseURL: "<databaseURL>",
    projectId: "<projectId>",
    storageBucket: "<storageBucket>",
    messagingSenderId: "<messagingSenderId>"
};
let app = Firebase.initializeApp(config);
export const db = app.database();