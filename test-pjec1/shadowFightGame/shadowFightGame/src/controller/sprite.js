import { c1,height1,width1 } from "../controller/runGame"


const gravity = 0.7

class Sprite {
    constructor({
      position,
      imageSrc,
      scale = 1,
      framesMax = 1,
      offset = { x: 0, y: 0 },
    }) {
      this.position = position
      this.width = 50
      this.height = 150
      this.image = new Image()
      this.image.src = imageSrc
      this.scale = scale
      this.framesMax = framesMax
      this.framesCurrent = 0
      this.framesElapsed = 0
      this.framesHold = 5
      this.offset = offset
    }
  
    draw() {
      c1.drawImage(
        this.image,
        this.framesCurrent * (this.image.width / this.framesMax),
        0,
        this.image.width / this.framesMax,
        this.image.height,
        this.position.x - this.offset.x,
        this.position.y - this.offset.y,
        (this.image.width / this.framesMax) * this.scale,
        this.image.height * this.scale
      )
    }
    
    draw1() {
      c1.drawImage(
        this.image,
        this.framesCurrent * (this.image.width / this.framesMax),
        0,
        this.image.width / this.framesMax,
        this.image.height,
        this.position.x - this.offset.x,
        this.position.y - this.offset.y,
        (this.image.width / this.framesMax) * this.scale,
        this.image.height * this.scale
      )
    }

    animateFrames() {
      this.framesElapsed++
  
      if (this.framesElapsed % this.framesHold === 0) {
        if (this.framesCurrent < this.framesMax - 1) {
          this.framesCurrent++
        } else {
          this.framesCurrent = 0
        }
      }
    }
  
    update() {
      this.draw()
      this.animateFrames()
    }

    update1() {
      this.draw1()
      this.animateFrames()
    }
}
  
  class Fighter extends Sprite {
    constructor({
      position,
      velocity,
      color = 'red',
      imageSrc,
      scale = 1,
      framesMax = 1,
      offset = { x: 0, y: 0 },
      sprites,
      attackBox = { offset: {}, width: undefined, height: undefined }
    }) {
      super({
        position,
        imageSrc,
        scale,
        framesMax,
        offset
      })
  
      this.velocity = velocity
      this.width = 50
      this.height = 150
      this.lastKey
      this.attackBox = {
        position: {
          x: this.position.x,
          y: this.position.y
        },
        offset: attackBox.offset,
        width: attackBox.width,
        height: attackBox.height
      }
      this.color = color
      this.isAttacking
      this.health = 100
      this.framesCurrent = 0
      this.framesElapsed = 0
      this.framesHold = 5
      this.sprites = sprites
      this.dead = false
  
      for (const sprite in this.sprites) {
        sprites[sprite].image = new Image()
        sprites[sprite].image.src = sprites[sprite].imageSrc
      }
    }
  
    update() {
      this.draw()
      if (!this.dead) this.animateFrames()
  
      // attack boxes
      this.attackBox.position.x = this.position.x + this.attackBox.offset.x
      this.attackBox.position.y = this.position.y + this.attackBox.offset.y
  
      // draw the attack box
      // c.fillRect(
      //   this.attackBox.position.x,
      //   this.attackBox.position.y,
      //   this.attackBox.width,
      //   this.attackBox.height
      // )
  
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
      
     
      // gravity function
      if (this.position.y + this.height + this.velocity.y >= height1 - 96) {
        this.velocity.y = 0
        this.position.y = 330
      } else this.velocity.y += gravity;

      if (this.position.x + this.width + this.velocity.x >= width1) {
        this.position.x = width1-this.width;
      }
      if (this.position.x + this.width + this.velocity.x <= 0) {
        this.position.x = 10 -this.width;
      }
      if(this.position.y + this.height + this.velocity.y<=0){
        this.velocity.y = 5;
      }
    }

    update1() {
      this.draw1()
      if (!this.dead) this.animateFrames()
  
      // attack boxes
      this.attackBox.position.x = this.position.x + this.attackBox.offset.x
      this.attackBox.position.y = this.position.y + this.attackBox.offset.y
  
      // draw the attack box
      // c.fillRect(
      //   this.attackBox.position.x,
      //   this.attackBox.position.y,
      //   this.attackBox.width,
      //   this.attackBox.height
      // )
  
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
      
     
      // gravity function
      if (this.position.y + this.height + this.velocity.y >= height1 - 96) {
        this.velocity.y = 0
        this.position.y = 330
      } else this.velocity.y += gravity;

      if (this.position.x + this.width + this.velocity.x >= width1) {
        this.position.x = width1-this.width;
      }
      if (this.position.x + this.width + this.velocity.x <= 0) {
        this.position.x = 10 -this.width;
      }
      if(this.position.y + this.height + this.velocity.y<=0){
        this.velocity.y = 5;
      }
    }
  
    attack() {
      this.switchSprite('attack1')
      this.isAttacking = true
    }
  
    takeHit() {
      this.health -= 10
  
      if (this.health <= 0) {
        this.switchSprite('death')
      } else this.switchSprite('takeHit')
    }
  
    switchSprite(sprite) {
     

      if (this.image === this.sprites.death.image) {
        if (this.framesCurrent === this.sprites.death.framesMax - 1)
          this.dead = true
        return
      }
  
      // overriding all other animations with the attack animation
      if (
        this.image === this.sprites.attack1.image &&
        this.framesCurrent < this.sprites.attack1.framesMax - 1
      )
        return
  
      // override when fighter gets hit
      if (
        this.image === this.sprites.takeHit.image &&
        this.framesCurrent < this.sprites.takeHit.framesMax - 1
      )
        return
  
      switch (sprite) {
        case 'idle':
          if (this.image !== this.sprites.idle.image) {
            this.image = this.sprites.idle.image
            this.framesMax = this.sprites.idle.framesMax
            this.framesCurrent = 0
          }
          break
        case 'run':
          if (this.image !== this.sprites.run.image) {
            this.image = this.sprites.run.image
            this.framesMax = this.sprites.run.framesMax
            this.framesCurrent = 0
          }
          break
        case 'jump':
          if (this.image !== this.sprites.jump.image) {
            this.image = this.sprites.jump.image
            this.framesMax = this.sprites.jump.framesMax
            this.framesCurrent = 0
          }
          break
  
        case 'fall':
          if (this.image !== this.sprites.fall.image) {
            this.image = this.sprites.fall.image
            this.framesMax = this.sprites.fall.framesMax
            this.framesCurrent = 0
          }
          break
  
        case 'attack1':
          if (this.image !== this.sprites.attack1.image) {
            this.image = this.sprites.attack1.image
            this.framesMax = this.sprites.attack1.framesMax
            this.framesCurrent = 0
          }
          break
  
        case 'takeHit':
          if (this.image !== this.sprites.takeHit.image) {
            this.image = this.sprites.takeHit.image
            this.framesMax = this.sprites.takeHit.framesMax
            this.framesCurrent = 0
          }
          break
  
        case 'death':
          if (this.image !== this.sprites.death.image) {
            this.image = this.sprites.death.image
            this.framesMax = this.sprites.death.framesMax
            this.framesCurrent = 0
          }
          break
      }
    }
  }
  

export const background = new Sprite({
    position: {
      x: 0,
      y: 0
    },

    imageSrc: './src/public/img/background.png',
    
  })

export const shop = new Sprite({
    position: {
      x: 600,
      y: 128
    },
    imageSrc: './src/public/img/shop.png',
    scale: 2.75,
    framesMax: 6
  })

export const player = new Fighter({
    position: {
      x: 0,
      y: 0
    },
    velocity: {
      x: 0,
      y: 0
    },
    offset: {
      x: 0,
      y: 0
    },
    imageSrc: './src/public/img/samuraiMack/Idle.png',
    framesMax: 8,
    scale: 2.5,
    offset: {
      x: 215,
      y: 157
    },
    sprites: {
      idle: {
        imageSrc: './src/public/img/samuraiMack/Idle.png',
        framesMax: 8
      },
      run: {
        imageSrc: './src/public/img/samuraiMack/Run.png',
        framesMax: 8
      },
      jump: {
        imageSrc: './src/public/img/samuraiMack/Jump.png',
        framesMax: 2
      },
      fall: {
        imageSrc: './src/public/img/samuraiMack/Fall.png',
        framesMax: 2
      },
      attack1: {
        imageSrc: './src/public/img/samuraiMack/Attack1.png',
        framesMax: 6
      },
      takeHit: {
        imageSrc: './src/public/img/samuraiMack/Take Hit - white silhouette.png',
        framesMax: 4
      },
      death: {
        imageSrc: './src/public/img/samuraiMack/Death.png',
        framesMax: 6
      }
    },
    attackBox: {
      offset: {
        x: 100,
        y: 50
      },
      width: 160,
      height: 50
    }
  })


  export const enemy = new Fighter({
    position: {
      x: 950,
      y: 100
    },
    velocity: {
      x: 0,
      y: 0
    },
    color: 'blue',
    offset: {
      x: -50,
      y: 0
    },
    imageSrc: './img/kenji/Idle.png',
    framesMax: 4,
    scale: 2.5,
    offset: {
      x: 215,
      y: 167
    },
    sprites: {
      idle: {
        imageSrc: './src/public/img/kenji/Idle.png',
        framesMax: 4
      },
      run: {
        imageSrc: './src/public/img/kenji/Run.png',
        framesMax: 8
      },
      jump: {
        imageSrc: './src/public/img/kenji/Jump.png',
        framesMax: 2
      },
      fall: {
        imageSrc: './src/public/img/kenji/Fall.png',
        framesMax: 2
      },
      attack1: {
        imageSrc: './src/public/img/kenji/Attack1.png',
        framesMax: 4
      },
      takeHit: {
        imageSrc: './src/public/img/kenji/Take hit.png',
        framesMax: 3
      },
      death: {
        imageSrc: './src/public/img/kenji/Death.png',
        framesMax: 7
      }
    },
    attackBox: {
      offset: {
        x: -170,
        y: 50
      },
      width: 170,
      height: 50
    }
  })