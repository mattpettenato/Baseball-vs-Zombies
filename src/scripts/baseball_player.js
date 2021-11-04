const board = document.getElementById('board');
const ctx = board.getContext('2d');

export default class BaseballPlayer {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.health = 1000;
    this.team = [];

  }
  drawPlayer() {
    ctx.fillStyle = 'rgb(89	136	93	)';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = ('red');
    ctx.font = "12px Courier";

    ctx.fillText(this.health, this.x, this.y + 20);
  }  
}

