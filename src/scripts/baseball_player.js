import Projectile from './projectile.js'
// import Game from './game.js';

const board = document.getElementById('board');
const ctx = board.getContext('2d');

export default class BaseballPlayer {
  constructor(x, y){
    this.x = x;
    this.y = y;
    // this.game = new Game();
    // this.ball = new Projectile();
    this.width = 100;
    this.height = 100;
    this.health = 100;
    this.team = [];
    // this.balls = [];
  }
  drawPlayer() {
    ctx.fillStyle = 'rgb(89	136	93	)';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = ('red');
    ctx.font = "12px Arial";
    ctx.textAlign = "start";
    ctx.fillText(this.health, this.x, this.y + 10);
  }
  // drawTeam() {
  //   for (let i = 0; i < this.team.length; i++) {
  //     this.team[i].drawPlayer();
  //     console.log(this.team[i])
  //     this.ball.drawBall(this.team[i].x, this.team[i].y);
  //   }
  // }
  
}

