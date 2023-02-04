/** @format */
import "../signUpPage/style.css";
export let signUpPage = /*html */ `<body>

<section class ="body_style">
    <div class="create_Wrapper">
    <div class=" heading_wrapper">
    <img style="
    margin-left:-48px;
    object-fit: cover;
    width: 235px;
    height: 100px;
    border-radius: 5px;
    
    margin-bottom: 45px;" src="https://digiato.com/wp-content/uploads/2020/11/shadow-fight-arena.q6yj9i.jpg" alt="">


        <h2>Create new account</h2>
        
        <div class="form_chat_regis" style="    margin-top: 20px;">
            <form action="" class="chat_create_account" id="chat_create_account">
                <div class="create_firstname">
                    <input type="text" name ="firstName" class="firstname_create" required ="name blank">
                    <span>First Name</span>
                    <i></i>
                <p id ="err_firstName"></p>
                    
                </div>
                <div class="create_latstname">
                    <input type="text" name ="lastName" class="lastname_create" required>
                    <span>Last Name</span>
                    <i></i>
                <p id ="err_lastName"></p>

                </div>
                <div class="create_email">
                    <input type="email" name ="emailAdress" class="email_create" required="">
                    <span>Email Address</span>
                    <i></i>
                <p id ="err_email"></p>

                </div>
                <div class="create_password">
                    <input type="password" name="passwordAddress" class="password_create" required>
                    <span>Password</span>
                    <i></i>
                <p id ="err_password" style=" #45f3ff"></p>
                </div>

                <div class="password_confirm">
                    <input type="password" name ="confirmPassword" class="password_complete" required>
                    <span>Confirm Password</span>
                    <i></i>
                <p id ="err_confirm" style="color: #45f3ff"></p>
                </div>
                <div class="btn_create">
                    <button class="btn">Create</button>
                <p id ="server_err_message" style="color: #45f3ff;"></p>
                <p id ="server_success_message" style="color: #45f3ff;"></p>
                </div>
                <div class="loader" id="loader"></div>   

            </form>
            <div  id="loading12345"><img style="    position: absolute;
            bottom: 20px;
            z-index: 5;
            left: -28px;
            width: 400px;
            height: 370px;" src="./src/pages/z3734244304633_81477aebda66387f7d665006fe2bbc02.gif" alt="">
        </div>
        </div>
        <div class="create_question">
            <button type="submit" class="btn_question" id="concac">Already have an acount? Login here</button>
        </div>

    </div>
        

    </div>



</section>

</body>
`;
