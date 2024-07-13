import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

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

// Inicializar o aplicativo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Função para cadastro de usuários
window.signup = function (e) {
  e.preventDefault(); // Impede o envio do formulário

  // Obtenha os valores dos campos do formulário
  var fullName = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var copassword = document.getElementById("copassword").value;

  // Verifica se todos os campos estão preenchidos
  if (fullName === "" || email === "" || password === "" || copassword === "") {
    alert("Todos os campos são obrigatórios");
    return;
  }

  // Verifica se as senhas coincidem
  if (password !== copassword) {
    alert("Confirmação de senha incorreta");
    return;
  }

  // Cria um objeto com os dados do usuário
  var userData = {
    fullName: fullName,
    email: email,
    password: password
  };

  // Criação do usuário no Firebase Authentication
  createUserWithEmailAndPassword(auth, userData.email, userData.password)
    .then(function (userCredential) {
      // Limpa os campos do formulário
      document.getElementById("fullname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("copassword").value = "";

      // Redireciona para a página de login após o cadastro bem-sucedido
      window.location.replace('/login.html');
      alert("Cadastro realizado com sucesso!");
    })
    .catch(function (error) {
      // Manipula erros durante o cadastro
      var errorMessage = error.message;
      alert("Erro ao cadastrar: " + errorMessage);
    });
};
