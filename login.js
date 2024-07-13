import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDqq7youn1WVBnOebtDsJsIkAhnce7riVA",
  authDomain: "vs-fitness-1ee00.firebaseapp.com",
  databaseURL: "https://vs-fitness-1ee00-default-rtdb.firebaseio.com",
  projectId: "vs-fitness-1ee00",
  storageBucket: "vs-fitness-1ee00.appspot.com",
  messagingSenderId: "226050005879",
  appId: "1:226050005879:web:41d72f695ecead7c969f72",
  measurementId: "G-N49GS7T4H4"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// Obter elementos do DOM
var email = document.getElementById("email");
var password = document.getElementById("password");

// Função de login
window.login = function(e) {
  e.preventDefault();

  var obj = {
    email: email.value,
    password: password.value,
  };

  // Autenticar usuário
  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      // Armazenar UID no localStorage
      var uid = success.user.uid;
      localStorage.setItem("uid", uid);
      
      // Redirecionar para a página do usuário
      window.location.replace('index.html');
    })
    .catch(function (err) {
      // Manipular erros de login
      alert("Erro de login: " + err);
    });

  console.log(obj);
};
