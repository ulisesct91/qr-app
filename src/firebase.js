// Importamos funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 🔹 Copia aquí tu configuración desde Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAN19MIGKFfzKsAokMUocaL4zw5PigIcow",
  authDomain: "qr-menus-8503a.firebaseapp.com",
  projectId: "qr-menus-8503a",
  storageBucket: "qr-menus-8503a.firebasestorage.app",
  messagingSenderId: "186735377480",
  appId: "1:186735377480:web:ef290b0b8b9231bc532c7d",
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);

// Exportamos la instancia de Auth para usarla en React
export const auth = getAuth(app);
