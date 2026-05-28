var firebaseConfig = {
  apiKey: "ISI_DARI_FIREBASE",
  authDomain: "aether-cue-gallery.firebaseapp.com",
  projectId: "aether-cue-gallery",
  storageBucket: "aether-cue-gallery.firebasestorage.app",
  messagingSenderId: "957870196198",
  appId: "ISI_DARI_FIREBASE"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

var db = firebase.firestore();