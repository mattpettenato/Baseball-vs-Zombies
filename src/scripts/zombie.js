// import Projectile from './projectile.js'
const ZOM = new Image()
ZOM.src = '../../img/zombiewalksheet.png'

const board = document.getElementById('board');
const ctx = board.getContext("2d");
var speedChange = 0.8

export default class Zombie {
  constructor(y){
    this.x = board.width;
    this.y = y;
    this.width = 80;
    this.height = 100;
    this.health = 50;
    this.speed1 = 0.8
    this.speed2 = 0.4
    this.movement = Math.random() * this.speed1 + this.speed2
    this.picX = 0;
    this.picY = 0;
    this.minFrame = 0;
    this.maxFrame = 9;
    this.spriteWidth = 42;
    this.spriteHeight = 50;
  }
  moveZombie(){
    this.x -= this.movement
    // console.log(this.movement)
  }
  increaseSpeed() {
    this.speed1 += 0.2
    // console.log('speed: ' + this.speed1)
  }

  update(){
    if (this.picX < this.maxFrame) this.picX++;
    else this.picX = this.minFrame;
  }

  drawZombie() {
    // ctx.fillStyle = 'red';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = 'red';
    ctx.font = "12px Courier";
    // ctx.textAlign = "start";
    ctx.fillText(this.health + ' hp', this.x, this.y + 10);
    // ctx.drawImage(ZOM, this.x - 35, this.y, 100, 100)
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

    ctx.drawImage(ZOM, this.picX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x - 30, this.y, this.width, this.height)

  }
}


