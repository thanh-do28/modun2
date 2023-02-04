import '../pickWarriors/style.css'

export let pickWarriors = /*html */`
<section id="pick_warriors" class="pick_warriors">
    <div id="container">
      <div class="backgroud">
        <img
          src="https://i.pinimg.com/originals/15/a7/5e/15a75e64237c0e7d2e1c58b49be3b2fe.gif"
          alt=""
        />
      </div>
      <div class="form">
        <div class="text">
          <h3>CHỌN TƯỚNG</h3>
        </div>
        <div class="box" id="player1" onclick="player1()">
          <img src="./src/pages/pickWarriors/img/z3743638169736_cdad2c255d56a1aa57a1178f549a5914.jpg"/>
        </div>
        <div class="box" id="player2" onclick="player2()">
          <img src="./src/pages/pickWarriors/img/z3733779986128_2e0d41da33fa842cc1e12139dd1fb1e0.jpg" />
        </div>
        <div class="users">
          <div class="player" id="p1" style="display: none">
            <img class="player01" src="./src/pages/pickWarriors/img/[removal.ai]_tmp-6332a30c52794.png" />
          </div>
          <div class="player" id="p2" style="display: none">
            <img
              class="player02"
              src="./src/pages/pickWarriors/img/[removal.ai]_tmp-6332a26d2c426 (1).png"
            />
            <img
              style="margin-left: 50%; margin-top: -15%"
              src="https://media2.giphy.com/media/l4pTkNEd2P4MWo9iw/giphy.gif?cid=6c09b952dd30623a8c2c4945f2087ec4ca4365715e4975c3&rid=giphy.gif&ct=ts"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
`