const board = document.getElementById('board');
const ctx = board.getContext('2d');

export default class Projectile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.color = "grey";
    this.speed = 10;
    // this.projectiles = [];
  }

  moveBall() {
    this.x += this.speed
  }

  drawBaseball(){
    ctx.beginPath();
    ctx.arc(this.x + 100, this.y + 50, this.width, 0, 2 * Math.PI);
    ctx.fillStyle = this.color
    ctx.fill();
  }


}