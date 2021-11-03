import Zombie from './zombie.js';
import BaseballPlayer from './baseball_player.js';
import Board from './board.js';

const board = document.getElementById('board');
const ctx = board.getContext('2d');

export default class Game {
  constructor() {
    this.player = new BaseballPlayer();
    this.zombie = new Zombie();
    this.board = new Board();
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
  ctx.fillText("Round: " + this.round, 300, 75)
  }

  drawLives() {
    ctx.fillStyle = 'red';
    ctx.font = "25px Arial";
    ctx.textAlign = "start";
    ctx.fillText("Lives: " + this.lives, 700, 75)
  }

  // that = this
  roundOver() {
    this.round = this.round + 1;
    this.numZombie = this.round * 4;
    this.towerToken = this.towerToken + 1;
    // this.speedChange + 2;
    // this.newRound()
  }

  // this.zombie.zombies.splice(i, 1)
  stillZom() {
    for (let i = 0; i < this.zombie.zombies.length; i++) {
      // console.log(this.zombie.zombies[0]['x'])
      // console.log(this.zombie.zombies[1]['x'])
      // console.log(this.zombie.zombies)
      if (this.zombie.zombies[0]['x'] < 100) {
        // console.log('test')
        this.lives -= 1;
        this.zombie.zombies.splice(i, 1);
        
        // console.log(this.zombie.zombies)
      }
    }
  }


  newRound() {
    this.numZombie = this.round * 2;

  }



  drawCell(ctx) {
    // console.log(ctx)
    ctx.fillStyle = ('red');
    ctx.font = "25px Arial";
    ctx.textAlign = "start";
    // console.log(this.board.unitdata)
    ctx.fillText(this.towerToken + " tower tokens", 100, 75);
    ctx.fillText(this.numZombie + " zombies left", 500, 75);
    for (let i = 0; i < this.board.unitData.length; i++) {
      // console.log(this.board.unitData[i])
      this.board.unitData[i].drawGrid(ctx);
    }
  }

  drawEnemy() {
    for (let i = 0; i < this.zombie.zombies.length; i++) {
      this.zombie.zombies[i].moveZombie();
      this.zombie.zombies[i].drawZombie();
    }
    if (this.frame % 500 === 0) {
      let y = Math.floor(Math.random() * 5 + 1) * 100;
      if (this.numZombie > 0) {
        this.zombie.zombies.push(new Zombie(y))
        this.numZombie = this.numZombie - 1;
        // console.log(this.movement)
      }
    }
  }
collisionDetection(rect1, rect2) {
  if (!(rect1.x > rect2.x + rect2.width ||
    rect1.x + rect1.width < rect2.x ||
    rect1.y > rect2.y + rect2.height ||
    rect1.y + rect1.height < rect2.y))
    {
      return true;
    }
}


}

// function animate() {
//   ctx.clearRect(0, 0, board.width, board.height);
//   ctx.fillStyle = "rgb(214 162	71	)";
//   ctx.fillRect(0, 0, 1000, 100);
//   ctx.fillRect(0, 600, 1000, 100);
//   drawCell();
//   drawTeam();
//   drawEnemy();
//   drawRound();
//   roundOver();
//   frame++
//   requestAnimationFrame(animate);
// }
// animate()










