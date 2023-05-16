import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBbOMP2tUDmFvdeAV-RTN8sTQm5792Z5GY",
  authDomain: "ecommerce-react-coder-f4f2b.firebaseapp.com",
  projectId: "ecommerce-react-coder-f4f2b",
  storageBucket: "ecommerce-react-coder-f4f2b.appspot.com",
  messagingSenderId: "49838802059",
  appId: "1:49838802059:web:b31dff04c3b12a9127c08e"
};


const app = initializeApp(firebaseConfig);

export const initFirebase = () => app