const BASEBALLPLAYER = new Image()
// BASEBALLPLAYER.src = '../../img/2x2ballplayer.png'
BASEBALLPLAYER.src = '../../img/plswork_no_background.png'

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
    this.picX = 0;
    this.picY = 0;
    this.minFrame = 0;
    this.maxFrame = 1;
    this.spriteWidth = 52;
    this.spriteHeight = 52;
    this.throwing = false;
  }

  update() {
    if (this.picX < this.maxFrame) this.picX++;
    else this.picX = this.minFrame;

  }

  drawPlayer() {
    // console.log(this.picX)
    ctx.fillStyle = ('red');
    ctx.font = "12px Courier";
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    ctx.drawImage(BASEBALLPLAYER, this.picX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    // ctx.drawImage(BASEBALLPLAYER, this.x, this.y, 100, 100)
    ctx.fillText(this.health + " hp", this.x, this.y + 10);
  }  

}

