import Firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyA3QFgDiC5ZHziZTVMeOQpRSj9ywIf98Fk",
    authDomain: "my-artists-diary.firebaseapp.com",
    databaseURL: "https://my-artists-diary.firebaseio.com",
    projectId: "my-artists-diary",
    storageBucket: "my-artists-diary.appspot.com",
    messagingSenderId: "959636763012",
    appId: "1:959636763012:web:f82018efecf6967ff3edd1",
    measurementId: "G-SV6VDDRWCT"
};

// Initialize Firebase
if (!Firebase.apps.length) {
    try {
Firebase.initializeApp(firebaseConfig)
//!Firebase.apps.length ? Firebase.initializeApp(firebaseConfig): Firebase.app();
    } catch (e) {
        console.log(e);
    }
}
