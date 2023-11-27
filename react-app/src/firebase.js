const firebaseConfig = {
  apiKey: "AIzaSyCKOR1yq95SIdXP-b6dzdx4lFf8bSdQhzk",
  authDomain: "clone-d9bf0.firebaseapp.com",
  projectId: "clone-d9bf0",
  storageBucket: "clone-d9bf0.appspot.com",
  messagingSenderId: "776506650469",
  appId: "1:776506650469:web:c577ae8b1ee66d6ebc3b8c",
  measurementId: "G-GXHHYBC6ET"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.fireStore()
const auth = firebase.auth()
