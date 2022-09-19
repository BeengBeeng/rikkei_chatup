import { renderErrorMessage, setActiveScreen } from "../view/index";
import { createNerwUser } from "../model/index";
import { signIn } from "../model/index";
export let validateLoginInfo = (email, password) => {
  // regex, regular expression
  // email regex
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("email-error-message", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("email-error-message", "Invalid email");
  } else {
    renderErrorMessage("email-error-message", "");
  }
  if (!password) {
    renderErrorMessage("password-error-message", "Please enter your password");
  } else {
    renderErrorMessage("password-error-message", "");
  }
  if (email && password) {
    signIn(email, password);
  }
};

export let validateRestPassWordInfo = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("email-error-message", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("email-error-message", "Invalid email");
  } else {
    renderErrorMessage("email-error-message", "");
  }
};

export let validateRegisterInfo = (
  email,
  password,
  firstname,
  lastname,
  ConfirmPassworld
) => {
  // regex, regular expression
  // email regex
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("email-error-message", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("email-error-message", "Invalid email");
  } else {
    renderErrorMessage("email-error-message", "");
  }
  if (!password) {
    renderErrorMessage("password-error-message", "Please enter your password");
  } else {
    renderErrorMessage("password-error-message", "");
  }
  if (!firstname) {
    renderErrorMessage("fname-error-message", "Please enter your firstnam");
  } else {
    renderErrorMessage("fname-error-message", "");
  }
  if (!lastname) {
    renderErrorMessage("lname-error-message", "Please enter your lastname");
  } else {
    renderErrorMessage("lname-error-message", "");
  }
  if (!ConfirmPassworld) {
    renderErrorMessage(
      "cpassword-error-message",
      "Please enter your confirmpassword"
    );
  } else {
    renderErrorMessage("cpassword-error-message", "");
  }
  if (
    firstname &&
    lastname &&
    email &&
    password &&
    ConfirmPassworld &&
    ConfirmPassworld === password
  ) {
    createNerwUser(firstname, lastname, email, password);
  }
};
