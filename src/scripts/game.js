import Zombie from './zombie.js';
import BaseballPlayer from './baseball_player.js';
import Projectile from './projectile.js'
import Board from './board.js';

const board = document.getElementById('board');
const ctx = board.getContext('2d');

export default class Game {
  constructor() {
    this.player = new BaseballPlayer();
    this.zombie = new Zombie();
    this.board = new Board();
    this.ball = new Projectile();
    this.towerToken = 3;
    this.round = 1;
    this.numZombie = 2;
    this.lives = 5;
    // this.oldNumZom = numZombie;
    this.frame = 0
    this.populate = this.board.populateGrid();
    this.selectPiece = {
      width: 1000,
      height: 100
    }
  }
  
  drawRound() {
  ctx.fillStyle = 'red';
  ctx.font = "25px Arial";
  ctx.textAlign = "start";
  ctx.fillText("Round: " + this.round, 300, 90)
  }

  drawLives() {
    ctx.fillStyle = 'red';
    ctx.font = "25px Arial";
    ctx.textAlign = "start";
    ctx.fillText("Lives: " + this.lives, 700, 90)
  }

  roundOver() {
    this.round = this.round + 1;
    this.numZombie = this.round * 4;
    this.towerToken = this.towerToken + 1;
    // this.zombie.movement + 5;
  }

  restartGame(){
    this.round = 1;
    this.numZombie = 2;
    this.towerToken = 3;
    this.lives = 5;
    this.zombie.zombies = [];
    this.player.team = [];
  }

  stillZom() {
    for (let i = 0; i < this.zombie.zombies.length; i++) {
      if (this.zombie.zombies[0]['x'] < 100) {
        this.lives -= 1;
        this.zombie.zombies.splice(i, 1);
      }
      
    }
  }

  drawCell(ctx) {
    ctx.fillStyle = ('red');
    ctx.font = "25px Arial";
    ctx.textAlign = "start";
    ctx.fillText(this.towerToken + " tower tokens", 100, 90);
    ctx.fillText(this.numZombie + " zombies left", 500, 90);
    for (let i = 0; i < this.board.unitData.length; i++) {
      this.board.unitData[i].drawGrid(ctx);
    }
  }

  drawEnemy() {
    for (let i = 0; i < this.zombie.zombies.length; i++) {
      this.zombie.zombies[i].moveZombie();
      this.zombie.zombies[i].drawZombie();
    }
    if (this.frame % 100 === 0) {
      let y = Math.floor(Math.random() * 5 + 1) * 100;
      if (this.numZombie > 0) {
        this.zombie.zombies.push(new Zombie(y))
        // console.log(this.zombie.zombies[0])
        this.numZombie = this.numZombie - 1;
      }
    }
  }

  drawTeam() {
    for (let i = 0; i < this.player.team.length; i++) {
      this.player.team[i].drawPlayer();
      // console.log(this.player.team[i].x, this.player.team[i].y)
      // this.drawBall(this.player.team[i].x, this.player.team[i].y);
      this.ball.projectiles.push(new Projectile(this.player.team[i].x, this.player.team[i].y))
    }
  }

  drawBall(x, y) {
    // console.log(x)
    if (this.ball.projectiles.length > 0) {
      for (let i = 0; i < this.ball.projectiles.length; i++) {
        this.ball.projectiles[i].drawBaseball();
        this.ball.projectiles[i].moveBall();
      }
    }
  }

  // drawBall() {
  //   // console.log(this.zombie.zombies[0]['y'])

  //   for (let i = 0; i < this.ball.projectiles.length; i++) {
  //     console.log(this.player.balls)
  //     this.player.balls[i].moveBall();
  //     this.player.balls[i].drawBall();
  //   }
  //   // if (this.player.ball.projectile[0]['x'] < 100)
  //   // const xBall = newGame.board.mouse['x'] - (newGame.board.mouse['x'] % newGame.board.unitSize);
  //   // const yBall = newGame.board.mouse['y'] - (newGame.board.mouse['y'] % newGame.board.unitSize);

  //   for (let i = 0; i < this.player.team.length; i++){
  //     for (let y = this.unitSize; y < board.height - 100; y += this.unitSize) {
  //       for (let x = this.unitSize; x < board.width - 100; x += this.unitSize) {
  //         // console.log((this.player.team[i]['x', 'y']))
  //         if ((this.player.team[i]['x']) && (this.player.team[i]['y'])) {

  //         }
  //       }
  //     }
  //   }


  // }



  
  collisionDetection(thing1, thing2) {
    if (!(thing1.x > thing2.x + thing2.width ||
      thing1.x + thing1.width < thing2.x ||
      thing1.y > thing2.y + thing2.height ||
      thing1.y + thing1.height < thing2.y))
      {
        return true;
      }
  }
}
