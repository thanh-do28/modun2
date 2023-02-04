import "./style.css";
export let loginPage = /* html*/ ` <section class = "background_login">
<div class="login_Wrapper">
<div class ="login_heading">
<img style="object-fit: cover;
width: 235px;
height: 100px;
border-radius: 5px;" src="https://digiato.com/wp-content/uploads/2020/11/shadow-fight-arena.q6yj9i.jpg" alt="">
<div id="loginSuccess" style="color:#FFDF00; margin:20px 130px"></div>
            <div id="sign1" style="color:#45f3ff;margin:0px 83px"></div>
    <h2 style="margin:30px ;">Sign in to Group Super Sentai</h2>
    <div class="form_chat">
        <form action="" class="chat_login" id="chat_login">
            <div class="account">
                <input type="email" name = "email" class="email_login" required >
                <span>Username</span>
				<i></i>
            <p id="erros_email" style="color: #45f3ff;"></p>
            </div>
            <div class="password">
                <input type="password" name="password" class="password_login" required >
                <span style="margin-top:20px">Password</span>
				<i></i>      
            </div>
            <p id="erros_password" style="color: #45f3ff;" ></p>

            <div class="btn_login">
                <button type="submit" class="btn">Login</button>
            </div>
            <p id ="server_err_message" style="color: #45f3ff;"></p>
    <div class="loader" id="loaderlogin"></div>   

        </form>

    </div>
    <div class="create_question">
    <button type="submit" class="btn_create" id="btn_create">New to Sentai ? Create an account</button>  
    </div>
    <div  id="loading12345"><img style="    position: absolute;
    bottom: 200px;
    z-index: 5;
    left: 10px;
    width: 400px;
    height: 370px;" src="./src/pages/z3734244304633_81477aebda66387f7d665006fe2bbc02.gif" alt=""></div>
    <div class="forgotpass">
        <button type="submit" class="btn_forgot" id= "btn_forgot">Forget your password? Click here</button>
    </div>
</div>
</div>
</section>
</body>`;
