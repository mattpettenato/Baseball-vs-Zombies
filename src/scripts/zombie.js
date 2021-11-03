import Projectile from './projectile.js'

const board = document.getElementById('board');
const ctx = board.getContext("2d");
const speedChange = 0.3

export default class Zombie {
  constructor(y){
    this.x = board.width;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.health = 50;
    this.speed = Math.random() * speedChange + 0.2;
    this.movement = this.speed;
    this.zombies = []
  }
  moveZombie(){
    this.x -= this.movement
  }
  drawZombie() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = 'blue';
    ctx.font = "12px Arial";
    ctx.textAlign = "start";
    ctx.fillText(this.health + ' hp', this.x, this.y + 10);
  }
}


