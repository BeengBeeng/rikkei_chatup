import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { renderErrorMessage } from "../view/index";
import { setActiveScreen } from "../view/index";

export let createNerwUser = (firstName, lastName, email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      // Hiện thị ra là đăng kí thành công
      renderErrorMessage("marcelo", "đăng kí thành công");
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode, errorMessage);

      renderErrorMessage("sever-error-message", errorMessage);
    });
};
// Hàm check thông tin đăng nhập
export let signIn = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      setActiveScreen("chatPage");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      renderErrorMessage("email-error-message", errorMessage);
    });
};
