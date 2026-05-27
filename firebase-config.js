const firebaseConfig = {
    apiKey: "ISI_API_KEY_KAMU",
    authDomain: "ISI_AUTH_DOMAIN_KAMU",
    projectId: "ISI_PROJECT_ID_KAMU",
    storageBucket: "ISI_STORAGE_BUCKET_KAMU",
    messagingSenderId: "ISI_MESSAGING_ID_KAMU",
    appId: "ISI_APP_ID_KAMU"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
