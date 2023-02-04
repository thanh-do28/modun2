
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";

import { renderErrorMessage } from "../view/view";
import { setActivesScreen } from "../view/view";
import { alertSuccess } from "../view/view";
import { wrongAlert } from "../view/view";
import { loading } from "../view/view";

export let authUser = {};
export let createNewUser = (
  firstname,
  lastname,
  email,
  password,
  passwordagain
) => {
  loading("block");
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);

      renderErrorMessage("server_success_message", "SIGN UP SUCCESS");
      renderErrorMessage("server_err_message", "");
      loading("none");
      return alertSuccess("SIGN UP SUCCESSFUL PLEASE CHECK VERYFY EMAIL");
    })
    .then(() => {
      return sendEmailVerification(auth.currentUser);
    })
    .then(() => {
      setActivesScreen("loginPage");
    })
    .catch((err) => {
      loading("none");
      const errorCode = err.code;
      const errorMessage = err.message;
      renderErrorMessage("server_err_message", errorMessage);
      renderErrorMessage("server_success_message", "");
    });
};
export let createNewUser123 = (email, password) => {
  loading("block");
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      authUser.email = user.email;
      authUser.displayname = user.displayName;
      // ...
      // renderErrorMessage("loginSuccess", "SIGN IN SUCCESS");
      renderErrorMessage("sign1", "");
    })
    .then(() => {
      loading("none");
      return alertSuccess("SIGN IN SUCCESS");
    })
    .then(() => {
      setActivesScreen("chat");
    })
    .catch((error) => {
      loading("none");
      const errorCode = error.code;
      const errorMessage = error.message;
      renderErrorMessage("sign1", errorMessage);
      renderErrorMessage("loginSuccess", "");
    });
};

export let resetpass = (email) => {
  loading("block");
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      loading("none");
      return alertSuccess("Check for email =))");

      // ..
    })
    .catch((error) => {
      loading("none");
      const errorCode = error.code;
      const errorMessage = error.message;
      return wrongAlert();
      // ..
    });
};



export let pickWarrior = () => {
  let player1 = document.getElementById("p1");
  let player2 = document.getElementById("p2");
  let playend = document.getElementById("playend")
  let namePlayer1 = document.getElementById("namePlayer1")
  let namePlayer2 = document.getElementById("namePlayer2")
  function player1fn() {
      if (player1.style.display == "none") {
        player1.style.display = "block";
        namePlayer1.innerHTML = "cuong gamm gamm"
      } else {
        player1.style.display = "none";
        playend.style.display = "none"
      }
      if(player1.style.display == "block" && player2.style.display == "block"){
        playend.style.display = "block"
        starTimergo()
      }
    }
  function player2fn() {
      if (player2.style.display == "none") {
        player2.style.display = "block";
        namePlayer2.innerHTML = "phu checker"
      } else {
        player2.style.display = "none";
        playend.style.display = "none"
      }
      if(player1.style.display == "block" && player2.style.display == "block"){
        playend.style.display = "block"
        starTimergo()
      }
    }

  let player01 = document.getElementById("player1")
  player01.onclick = () =>{
      player1fn()
  }
  let player02 = document.getElementById("player2")
  player02.onclick = () => {
      player2fn()
 }

 let timestar1 = 10;
 let timeId1;
 function starTimergo() {
  if (timestar1 > 0) {
    timeId1 = setTimeout(starTimergo, 1000);
    timestar1--;
    document.querySelector(".buttonLetgo").innerHTML = timestar1;
  } else if (timestar1 == 0) {
    setActivesScreen("viewGamePage")
  }
}

}
