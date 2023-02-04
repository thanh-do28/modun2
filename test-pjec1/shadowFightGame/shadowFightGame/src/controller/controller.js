import { renderErrorMessage, clearRq } from "../view/view";
import { createNewUser } from "../model/model";
import { createNewUser123 } from "../model/model";
import { resetpass } from "../model/model";
export let validateLoginPage = (email, password) => {
  // regex, regular expression
  // email regex

  clearRq();
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("erros_email", "! Please enter your email =((");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("erros_email", "Invalid email");
  } else {
    renderErrorMessage("erros_email", "");
  }

  if (!password) {
    renderErrorMessage("erros_password", "! Please enter your password =((");
  } else {
    renderErrorMessage("erros_password", "");
  }
  if (email && password) {
    console.log("Hello world");
    createNewUser123(email, password);
  }
};
export let validateregister = (
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) => {
  const registerRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!firstName) {
    renderErrorMessage("err_firstName", "! Please enter your firstname =((");
  } else {
    renderErrorMessage("err_firstName", "");
  }
  if (!lastName) {
    renderErrorMessage("err_lastName", "! Please enter your lastname =((");
  } else {
    renderErrorMessage("err_lastName", "");
  }
  if (!email) {
    renderErrorMessage("err_email", "! Please enter your email =((");
  } else {
    renderErrorMessage("err_email", "");
  }
  if (!password) {
    renderErrorMessage("err_password", "! Please enter your password =((");
  } else {
    renderErrorMessage("err_password", "");
  }
  if (!confirmPassword) {
    renderErrorMessage("err_confirm", "! Please enter your password  =((");
  } else if (confirmPassword !== password) {
    renderErrorMessage("err_confirm", "! Please check your password =((");
  } else {
    renderErrorMessage("err_confirm", "");
  }
  if (
    firstName &&
    lastName &&
    email &&
    password &&
    confirmPassword &&
    password === confirmPassword
  ) {
    createNewUser(firstName, lastName, email, password, confirmPassword);
  }
};

export let validatereset = (email) => {
  const resetRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("erro_email", "! Please enter your email =((");
  } else {
    renderErrorMessage("erro_email", "");
    resetpass(email);
  }
};
