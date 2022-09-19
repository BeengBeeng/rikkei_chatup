import "./style.css";
export let registerPage = /*html*/ `
<div class="bale1" id="bale1">
        <div class="container1">
            <div class="logo2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png" alt="">
            </div>
            <div class="rest1">Create new account</div>
            <div class="error" id="sever-error-message"></div>
            <div id="marcelo"></div>

            <form class="form1" id="form1">
                <div class="wrapper1">
                    <p>First Name</p>
                    <input type="text" placeholder="Please enter your first name" name="firstname">
                    <div id="fname-error-message"></div>
                </div>
                <div class="wrapper1">
                    <p>Last Name</p>
                    <input type="text" placeholder="Please enter your last name" name="lastname">
                    <div id="lname-error-message"></div>
                </div>
                <div class="wrapper1">
                    <p>Email address</p>
                    <input type="text" placeholder="Please enter your email" name="email">
                    <div id="email-error-message"></div>

                </div>
                <div class="wrapper1">
                    <p>Passworld</p>
                    <input type="text" placeholder="Please enter your passworld" name="password">
                    <div id="password-error-message"></div>

                </div>
                <div class="wrapper1">
                    <p>Confirm Passworld</p>
                    <input type="text" placeholder="Confirm your passworld" name="ConfirmPassworld">
                    <div id="cpassword-error-message"></div>
                </div>
                <button>Register</button>
                <div class="titi1" id="titi1">
                    <p>Already have an account?Login here</p>
                </div>
            </form>
        </div>
    </div>
`;
