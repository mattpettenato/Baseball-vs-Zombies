import Zombie from './zombie.js';
import BaseballPlayer from './baseball_player.js';
import Projectile from './projectile.js'
import Board from './board.js';

const board = document.getElementById('board');
const ctx = board.getContext('2d');
// const delay = ms => new Promise(res => setTimeout(res, ms));

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
    this.projectiles = [];
    this.deadprojectiles = [];
    this.zombies = []
    this.numBalls = 0;
    this.score = 0;
    // this.myVar;
    // this.numBalls = this.player.team.length;
    // this.oldNumZom = numZombie;
    this.frame = 0
    this.newFrame = 600
    this.populate = this.board.populateGrid();
    this.selectPiece = {
      width: 1000,
      height: 100
    }
  }
  
  //test
  drawRound() {
  ctx.fillStyle = 'red';
  ctx.font = "22px Courier";
  ctx.textAlign = "start";
  ctx.fillText("Round: " + this.round, 300, 90)
  }

  drawScore(){
    // console.log(test);
    ctx.fillStyle = 'red';
    ctx.font = "22px Courier";
    ctx.textAlign = "start";
    ctx.fillText("Score: " + this.score, 800, 650)
  }

  drawLives() {
    ctx.fillStyle = 'red';
    ctx.font = "22px Courier";
    ctx.textAlign = "start";
    ctx.fillText("Lives: " + this.lives, 500, 650)
    // console.log(this.lives)
  }

  syncDelay(milliseconds) {
    var start = new Date().getTime();
    var end = 0;
    while ((end - start) < milliseconds) {
      end = new Date().getTime();
    }
  }

  roundOver() {

      this.round = this.round + 1;
      this.numZombie = this.round * 4;
      this.towerToken = this.towerToken + 1;
      this.zombie.increaseSpeed();
  }

  restartGame(){
    // this.round = 1;
    // this.numZombie = 2;
    // this.towerToken = 3;
    // this.lives = 5;
    this.zombies = [];
    // this.zombie.deadzombies = [];
    // this.player.team = [];
    this.ball.projectiles = [];

  }

  stillZom() {
    for (let i = 0; i < this.zombies.length; i++) {
      if ((this.zombies[i]['x'] < 100) && this.zombies[i]) {
        this.lives -= 1;
        // this.zombie.zombies[i].movement = 0
        this.zombies.splice(i, 1);
        // this.zombie.zombies[i].movement = 0.8
        // this.zombie.zombies[i].y = 1500
      }      
    }
  }


  stillBall() {
    // console.log(this.projectiles)
    for (let i = 0; i < this.projectiles.length; i++) {
      // console.log(this.projectiles[0]['x'])
      if ((this.projectiles[0]['x'] >= 900) && this.projectiles[i]) {
        this.projectiles.splice(i, 1);
      }

    }
  }

  drawTitle() {
    ctx.fillStyle = ('blue');
    ctx.font = "30px Courier";
    ctx.textAlign = "start";
    ctx.fillText('Baseball vs. Zombies', 320, 60);
  }

  drawCell(ctx) {
    ctx.fillStyle = ('red');
    ctx.font = "25px Courier";
    ctx.fillText("Baseball", 100, 650);
    ctx.fillText("Cards: " + this.towerToken, 100, 670);
    ctx.fillText("Incoming", 300, 650);
    ctx.fillText("Zombies: " + this.numZombie, 300, 670);
    ctx.fillText("Lives: " + this.lives, 500, 650)
    ctx.fillText("Score: " + this.score, 700, 650)
    ctx.fillText("Round: " + this.round, 440, 90)

    // ctx.fillText(this.zombies.length + " zombies arr", 700, 50);
    for (let i = 0; i < this.board.unitData.length; i++) {
      this.board.unitData[i].drawGrid(ctx);
    }
  }

  drawEnemy() {
    // console.log(this.zombie.zombies)
    // console.log(this.zombie.deadzombies)
  
    for (let i = 0; i < this.zombies.length; i++) {
      this.zombies[i].moveZombie();
      this.zombies[i].drawZombie();
    }
    if (this.frame % 200 === 0) {
      let y = Math.floor(Math.random() * 5 + 1) * 100;
      if (this.numZombie > 0) {
        this.zombies.push(new Zombie(y))
        // this.zombie.deadzombies.push(this.zombie.zombies[this.zombie.zombies.length - 1])
        // console.log(this.zombie.zombies[0])
        this.numZombie = this.numZombie - 1;
      }
    }
  }

  drawTeam() {
    for (let i = 0; i < this.player.team.length; i++) {
      this.player.team[i].drawPlayer();
      if (this.frame % 100 === 0) {
        this.numBalls = this.numBalls + 1;
        this.projectiles.push(new Projectile(this.player.team[i].x, this.player.team[i].y))
      }
    }
  }

  drawBall() {
    if (this.projectiles.length > 0) {
      this.stillBall();
      // if (this.pro)
      for (let i = 0; i < this.projectiles.length; i++) {
        this.projectiles[i].drawBaseball();
        this.projectiles[i].moveBall();
      }
    }
  }

  getZomPos() {
    if (this.zombies.length > 0) {
      for (let i = 0; i < this.zombies.length; i++) {
        return ([(this.zombies[i].x), (this.zombies[i].y)])
      }
    }
  }

  getBallPos() {
    if (this.projectiles.length > 0) {
      for (let i = 0; i < this.projectiles.length; i++) {
        return ([(this.projectiles[i].x), (this.projectiles[i].y)])
      }
    }
  }


  ballHit() {
    if ((this.projectiles.length > 0)){
      for (let i = 0; i < this.zombies.length; i++) {
        for (let j = 0; j < this.projectiles.length; j++) {
          if (this.zombies[i] && this.projectiles[j]) {
            if ((this.projectiles[j].x >= this.zombies[i].x - 100) && (this.projectiles[j].y === this.zombies[i].y)) {
              this.zombies[i].health -= 10
              this.projectiles.splice(j, 1)
              if ((this.zombies[i]) && (this.zombies[i].health <= 0)) {
                this.zombies[i].movement = 0
                this.zombies.splice(i, 1);
                this.score += 1
              }
            }
          }
        }
      }
    }
  }

  playerHit() {
    if ((this.player.team.length > 0)) {
      for (let i = 0; i < this.zombies.length; i++) {
        for (let j = 0; j < this.player.team.length; j++) {
          if (this.player.team[j] && this.zombies[i] && (this.player.team[j].x + 100  >= this.zombies[i].x) && (this.player.team[j].y === this.zombies[i].y)) {
            this.zombies[i].movement = 0
            this.player.team[j].health -= 5
            if ((this.player.team[j].health <= 0) ) {
              this.zombies[i].movement = 0.9
              this.player.team.splice(j, 1);
            }
          }
        }
      }
    }
  }

  checkPlayer(){
    if ((this.player.team.length > 0)) {
      for (let j = 0; j < this.player.team.length; j++) {
        if (this.player.team[j] && (this.player.team[j].health === 0)) {
          this.player.team.splice(j, 1);
        }
      }
    }
  }

  checkZom(){
    if ((this.zombies.length > 0)) {
      for (let i = 0; i < this.zombies.length; i++) {
        for (let j = 0; j < this.player.team.length; j++) {
          if (this.zombies[i] && this.player.team[j]) {
          if (this.player.team[j] && this.zombies[i] && (this.player.team[j].x + 100 < this.zombies[i].x) && (this.player.team[j].y === this.zombies[i].y)) {
            for (let k = 1; k < this.player.team.length; k++)
              if (((this.zombies[i].movement === 0) && (this.player.team[j].y === this.player.team[k].y)) && (((this.player.team[j].x - this.player.team[k].x) === 100) && ((this.player.team[j].x - this.player.team[k].x) === -100))) {
                console.log('test')
              this.zombies[i].movement = 0.9
          }
        }
          }
          }
        }
      }
    }
}

