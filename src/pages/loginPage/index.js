import "./style.css";
export let loginPage = /*html*/ `
<div class="bale" id="bale">
        <div class="container">
            <div class="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png" alt="">
            </div>
            <div class="rest">Sign in to Rikkei Chat</div>
            <form class="form" id="form">
                <div class="wrapper">
                    <p>Email address</p>
                    <input type="text" placeholder="Please enter your email" name="email">
                    <div id="email-error-message"></div>
                </div>
                <div class="wrapper">
                    <p>Passworld</p>
                    <input type="password" placeholder="Please enter your passworld" name="password">
                    <div id="password-error-message"></div>
                </div>
                <button>Login</button>
                <div class="titi" id="titi">
                    <p>New to Rikkei Chat? Create an account</p>
                </div>
                <div class="tito" id="tito">
                    <p>Forget your passworld?Click here</p>
                </div>
            </form>
        </div>
    </div>
    `;
