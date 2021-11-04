// import Projectile from './projectile.js'
const ZOM = new Image()
ZOM.src = '/img/zombie.png'

const board = document.getElementById('board');
const ctx = board.getContext("2d");
var speedChange = 0.8

export default class Zombie {
  constructor(y){
    this.x = board.width;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.health = 50;
    this.speed1 = 0.8
    this.speed2 = 0.4
    this.movement = Math.random() * this.speed1 + this.speed2
  }
  moveZombie(){
    this.x -= this.movement
  }
  increaseSpeed() {
    this.speed1 += 0.2
    // console.log('speed: ' + this.speed1)
  }

  drawZombie() {
    // ctx.fillStyle = 'red';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = 'red';
    ctx.font = "12px Courier";
    // ctx.textAlign = "start";
    ctx.fillText(this.health + ' hp', this.x, this.y + 10);
    ctx.drawImage(ZOM, this.x - 35, this.y, 100, 100)

  }
}


