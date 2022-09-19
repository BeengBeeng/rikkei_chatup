import { loginPage } from "../pages/loginPage/index";
import { registerPage } from "../pages/registerPage/index";
import { resetPasswordPage } from "../pages/resetPasswordPage/index";
import { chatPage } from "../pages/chatPage/index";
import { validateLoginInfo } from "../controller/index";
import { validateRestPassWordInfo } from "../controller/index";
import { validateRegisterInfo } from "../controller/index";

export let setActiveScreen = (screenName) => {
  const app = document.getElementById("app");
  switch (screenName) {
    case "loginPage":
      if (app) {
        app.innerHTML = loginPage;
      }
      const loginForm = document.getElementById("form");
      if (loginForm) {
        console.log(loginForm);
        loginForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = loginForm.email.value;
          const password = loginForm.password.value;

          //   console.log(email, password);
          // Controller làm nhiệm vụ validate thông tin
          // Tạo hàm validateLoginInfo nhận vào email và password trong controller
          // Export hàm validateLoginInfo
          // Import hàm validateLoginInfo trong view
          // Trong Screen Login, gọi hàm validateLoginInfo() với email và pass lấy
          // từ form

          // Trong controller, logic của hàm validateLoginInfo sẽ là kiểm tra xem
          // có phải email hợp lệ không, có bỏ trống trường nào không

          // Tạo một hàm setMessage ở view và export sang controller để in ra lỗi
          // từ những trường hợp validate đó
          // Làm giống hệt các bước trên với những màn resetpassword và register

          validateLoginInfo(email, password);
        });
      }
      const registerLink = document.getElementById("titi");
      if (registerLink) {
        registerLink.onclick = function () {
          setActiveScreen("registerPage");
        };
      }
      const resetPasswordLink = document.getElementById("tito");
      if (resetPasswordLink) {
        resetPasswordLink.onclick = function () {
          setActiveScreen("resetPasswordPage");
        };
      }
      break;
    case "registerPage":
      if (app) {
        app.innerHTML = registerPage;
      }
      const registerForm = document.getElementById("form1");
      if (registerForm) {
        console.log(registerForm);
        registerForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = registerForm.email.value;
          const password = registerForm.password.value;
          const firstname = registerForm.firstname.value;
          const lastname = registerForm.lastname.value;
          const ConfirmPassworld = registerForm.ConfirmPassworld.value;

          validateRegisterInfo(
            email,
            password,
            firstname,
            lastname,
            ConfirmPassworld
          );
        });
      }
      const loginLink = document.getElementById("titi1");
      if (loginLink) {
        loginLink.onclick = function () {
          setActiveScreen("loginPage");
        };
      }
      break;
    case "resetPasswordPage":
      if (app) {
        app.innerHTML = resetPasswordPage;
      }
      const resetpasswordForm = document.getElementById("form2");
      if (resetpasswordForm) {
        console.log(resetpasswordForm);
        resetpasswordForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const email2 = resetpasswordForm.email.value;
          validateRestPassWordInfo(email2);
        });
      }
      const loginLink1 = document.getElementById("titi2");
      if (loginLink1) {
        loginLink1.onclick = function () {
          setActiveScreen("loginPage");
        };
      }
      break;
    case "chatPage":
      if (app) {
        app.innerHTML = chatPage;
      }
      break;
    default:
      break;
  }
};

export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
  }
};
