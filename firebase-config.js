var firebaseConfig = {
  apiKey: "PASTE_APIKEY_ASLI",
  authDomain: "aether-cue-gallery.firebaseapp.com",
  projectId: "aether-cue-gallery",
  storageBucket: "aether-cue-gallery.firebasestorage.app",
  messagingSenderId: "957870196198",
  appId: "PASTE_APPID_ASLI"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

var db = firebase.firestore();