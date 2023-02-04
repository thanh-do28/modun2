import { loginPage } from "../pages/loginPage/login";
import { viewGamePage } from "../pages/viewGamePage/viewGame";
import {signUpPage} from "../pages/signUpPage/signUp";
import {resetPage} from "../pages/restePassPage/index";
import { canvas1 } from "../controller/runGame";
import {pickWarriors} from "../pages/pickWarriors/pickWarriors"
import { player1, player2 } from "../model/model";
import {
  validateregister,
  validateLoginPage,
  validatereset,
} from "../controller/controller";

import swal from "sweetalert";

export let alertSuccess = (text) => {
  return swal({
    title: "Good job!",
    text: text,
    icon: "success",
    button: "Ok",
  });
};
export let wrongAlert = (text) => {
  return swal("!Email does not exist =((");
};
export let setActivesScreen = (screenName) => {
  let app = document.getElementById("app");

  switch (screenName) {
    case "loginPage":
      if (app) {
        app.innerHTML = loginPage;
        console.log("Hello");
      }

      const loginForm = document.getElementById("chat_login");
      if (loginForm) {
        console.log(loginForm);
        loginForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = loginForm.email.value;
          const password = loginForm.password.value;

          validateLoginPage(email, password);
        });
      }
      const ccc = document.getElementById("btn_create");
      ccc.onclick = () => {
        setActivesScreen("signUpPage");
      };
      const cccc = document.getElementById("btn_forgot");
      cccc.onclick = () => {
        setActivesScreen("resetPage");
      };

      break;

    case "signUpPage":
      if (app) {
        app.innerHTML = signUpPage;
        console.log("Hello");
      }
      const registerForm = document.getElementById("chat_create_account");
      if (registerForm) {
        console.log(registerForm);
        registerForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const firstName = registerForm.firstName.value;
          const lastName = registerForm.lastName.value;
          const emailAdress = registerForm.emailAdress.value;
          const passwordAddress = registerForm.passwordAddress.value;
          const confirmPassword = registerForm.confirmPassword.value;
          validateregister(
            firstName,
            lastName,
            emailAdress,
            passwordAddress,
            confirmPassword
          );
        });
      }
      const neww = document.getElementById("concac");
      neww.onclick = () => {
        setActivesScreen("loginPage");
      };
      break;

    case "resetPage":
      if (app) {
        app.innerHTML = resetPage;
        console.log("Hello");
      }
      const resetForm = document.getElementById("chat_reset");
      if (resetForm) {
        console.log(resetForm);
        resetForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = resetForm.email.value;
          validatereset(email);
        });
      }
      const ccccc = document.getElementById("conca");
      if (ccccc) {
        ccccc.onclick = () => {
          setActivesScreen("loginPage");
        };
      }
      break;

      case "pickWarriors":
        if(app){
            app.innerHTML=pickWarriors;
        }
        pickWarrior()
        break;

    case "viewGamePage":
        if(app){
            app.innerHTML = viewGamePage;
        }
        canvas1();
        break;
  }
};

export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
  }
};

export let loading = (loading) => {
  let loading123 = document.getElementById("loading12345");
  loading123.style.display = loading;
};

export let clearRq = () => {
  let loginForm = document.getElementById("chat_login");
  if (loginForm) {
    loginForm.email.removeAttribute("required");
    loginForm.password.removeAttribute("required");
  }
};