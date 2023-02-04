import { background, shop, player, enemy } from "../controller/sprite";
import {
  rectangularCollision,
  determineWinner,
  decreaseTimer,
  timerId,
  starTimer,
  timer
} from "../controller/uill";

export let c1;
export let height1;
export let width1;
export let key;
export let canvas1 = () => {
  const canvas = document.querySelector("canvas");
  const c = canvas.getContext("2d");

  c1 = c;

  canvas.width = 1024;
  canvas.height = 576;

  height1 = canvas.height;
  width1 = canvas.width;

  c.fillRect(0, 0, canvas.width, canvas.height);

  const background1 = background;

  const shop1 = shop;

  console.log(player);

  const keys = {
    a: {
      pressed: false,
    },
    d: {
      pressed: false,
    },
    ArrowRight: {
      pressed: false,
    },
    ArrowLeft: {
      pressed: false,
    },
  };
  key = keys;

  let timestar = 4;
  let isCalm = true
  let timeId;
  function starTimer() {
    if (timestar > 0) {
      timeId = setTimeout(starTimer, 1000);
      timestar--;
      document.querySelector("#displayText1").style.display = "flex";
      document.querySelector("#displayText1").innerHTML = timestar;
    } else if (timestar == 0) {
      document.querySelector("#displayText1").style.display = "flex";
      document.querySelector("#displayText1").style.color = "red";
      document.querySelector("#displayText1").innerHTML = "START";
      setTimeout(() => {
        document.querySelector("#displayText1").style.display = "none";
        decreaseTimer();
        isCalm = false
      }, 2000);
    }
  }

  starTimer();
  // decreaseTimer()
  function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
    background1.update();
    shop1.update();
    c.fillStyle = "rgba(255, 255, 255, 0.15)";
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.update();
    enemy.update1();

    player.velocity.x = 0;
    enemy.velocity.x = 0;

    // player movement

    if (keys.a.pressed && player.lastKey === "a") {
      player.velocity.x = -5;
      player.switchSprite("run");
    } else if (keys.d.pressed && player.lastKey === "d") {
      player.velocity.x = 5;
      player.switchSprite("run");
    } else {
      player.switchSprite("idle");
    }

    // jumping
    if (player.velocity.y < 0) {
      player.switchSprite("jump");
    } else if (player.velocity.y > 0) {
      player.switchSprite("fall");
    }

    // Enemy movement
    if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
      enemy.velocity.x = -5;
      enemy.switchSprite("run");
    } else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
      enemy.velocity.x = 5;
      enemy.switchSprite("run");
    } else {
      enemy.switchSprite("idle");
    }

    // jumping
    if (enemy.velocity.y < 0) {
      enemy.switchSprite("jump");
    } else if (enemy.velocity.y > 0) {
      enemy.switchSprite("fall");
    }

    // detect for collision & enemy gets hit
    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: enemy,
      }) &&
      player.isAttacking &&
      player.framesCurrent === 4
    ) {
      if(timer!==0 || player.health !== enemy.health) {
        enemy.takeHit();
        player.isAttacking = false;
  
        gsap.to("#enemyHealth", {
          width: enemy.health + "%",
        });
      }else if (timer==0 && player.health == enemy.health) {
        player.isAttacking = true;
      }
    }

    // if player misses
    if (player.isAttacking && player.framesCurrent === 4) {
      player.isAttacking = false;
    }

    // this is where our player gets hit
    if (
      rectangularCollision({
        rectangle1: enemy,
        rectangle2: player,
      }) &&
      enemy.isAttacking &&
      enemy.framesCurrent === 2
    ) {
      if(timer!==0 || player.health !== enemy.health) {
        player.takeHit();
        enemy.isAttacking = false;

        gsap.to("#playerHealth", {
          width: player.health + "%",
        });
      }else if(timer==0 && player.health == enemy.health) {
        enemy.isAttacking = true;
      }
    }

    // if player misses
    if (enemy.isAttacking && enemy.framesCurrent === 2) {
      enemy.isAttacking = false;
    }

    // end game based on health
    if (enemy.health <= 0 || player.health <= 0) {
      determineWinner({ player, enemy, timerId });
    }
  }
  animate();

  window.addEventListener("keydown", (event) => {
    if(timestar >= 0 && isCalm) {
      return;
    }

    if (!player.dead) {
      switch (event.key) {
        case "d":
          keys.d.pressed = true;
          player.lastKey = "d";
          break;
        case "a":
          keys.a.pressed = true;
          player.lastKey = "a";
          break;
        case "w":
          player.velocity.y = -15;
          break;
        case " ":
          player.attack();
          break;
      }
    }

    if (!enemy.dead) {
      switch (event.key) {
        case "ArrowRight":
          keys.ArrowRight.pressed = true;
          enemy.lastKey = "ArrowRight";
          break;
        case "ArrowLeft":
          keys.ArrowLeft.pressed = true;
          enemy.lastKey = "ArrowLeft";
          break;
        case "ArrowUp":
          enemy.velocity.y = -15;
          break;
        case "ArrowDown":
          enemy.attack();

          break;
      }
    }
  });

  window.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "d":
        keys.d.pressed = false;
        break;
      case "a":
        keys.a.pressed = false;
        break;
    }

    // enemy keys
    switch (event.key) {
      case "ArrowRight":
        keys.ArrowRight.pressed = false;
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = false;
        break;
    }
  });
};
