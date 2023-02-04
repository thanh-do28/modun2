/**  */
import "./style.css";
export let resetPage = /*html*/ `<body>

<section class="body_wrapper">
    <div class="reset_Wrapper">
    <div class="heading_reset">
    <img style="object-fit: cover;
    width: 235px;
    height: 100px;
    border-radius: 5px;" src="https://digiato.com/wp-content/uploads/2020/11/shadow-fight-arena.q6yj9i.jpg" alt="">
    <h2>Reset your password </h2>
    <div class="form_chat_reset">

        <form action="" class="chat_reset" id="chat_reset">
            <div class="reset">
                <input type="email" name="email" class="email_reset" required>
                <span>Email address</span>
                <i></i>
                <p id="erro_email"></p>
            </div>
            <div class="btn_reset">
                <button class="btn">Reset password</button>
            </div>
            <p id ="server_err_message" style="color: #45f3ff;"></p>

            <div class="loader" id="loader"></div>   

        </form>
        <div  id="loading12345"><img style="    position: absolute;
        bottom: 20px;
        z-index: 5;
        left: -45px;
        width: 400px;
        height: 370px;" src="./src/pages/z3734244304633_81477aebda66387f7d665006fe2bbc02.gif" alt=""></div>
    </div>
    <div class="create_question">
        <button type="submit" class="btn_reset_question" id="conca">Already have an acount? Login here</button>
    </div>

    </div>
      
    </div>

</section>
</body>`;
