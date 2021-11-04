import BaseballPlayer from './scripts/baseball_player.js';
// import Projectile from './scripts/projectile.js';
import Game from './scripts/game.js';

const board = document.getElementById('board');
const ctx = board.getContext('2d');
const newGame = new Game();
const newPlayer = new BaseballPlayer;
// let test = 0
let gameState = true;
// const newBall = new Projectile;
// const delay = ms => new Promise(res => setTimeout(res, ms));

board.addEventListener('click', function(event) {
  const xPos = newGame.board.mouse['x'] - (newGame.board.mouse['x'] % newGame.board.unitSize);
  const yPos = newGame.board.mouse['y'] - (newGame.board.mouse['y'] % newGame.board.unitSize);

  if (yPos < 100 || yPos > 500 || xPos < 100 || xPos > 800) return;
  var i;
  for (let i = 0; i < newGame.player.team.length; i++) {
    // console.log(newGame.player.team[i])
    if (newGame.player.team[i].x === xPos && newGame.player.team[i].y === yPos) return;
  }
  if (newGame.towerToken > 0) {
    newGame.player.team.push(new BaseballPlayer(xPos, yPos));
    // console.log(newGame.player.team)
    newGame.towerToken = newGame.towerToken - 1;
    // console.log(newGame.towerToken)
  } else {
    console.log('Out of Tower Tokens')
    return;
  }
})

const boardPos = board.getBoundingClientRect(); // get better mouse pos 
board.addEventListener('mousemove', function (event) {
  newGame.board.mouse.x = event.x - boardPos.left;
  newGame.board.mouse.y = event.y - boardPos.top
})


function animate() {
  if (gameState === true) {
    ctx.clearRect(0, 0, board.width, board.height);
    ctx.fillStyle = "rgb(214 162	71)";
    ctx.fillRect(0, 0, 1000, 99);
    ctx.fillRect(0, 601, 1000, 100);
    newGame.drawCell(ctx);
    newGame.board.drawTitle();
    newGame.drawRound();
    newGame.drawTeam();
    newGame.drawEnemy();
    newGame.stillZom();
    newGame.drawLives();
    newGame.drawBall();
    newGame.drawScore();
    newGame.playerHit();
    newGame.checkZom();
    newGame.checkPlayer();
    // console.log(newGame.player.team[0])
    console.log(newGame.player.team)
    console.log(newGame.zombies)
    newGame.ballHit();
    newGame.frame++;
    if (newGame.lives > 0) {
      requestAnimationFrame(animate);
    } else {
      gameState = false
      cancelAnimationFrame(animate);
      console.log('done')
      // alert("Ran out of lives. You lost! Refresh page (F5) to play again.");
    }

    if ((newGame.numZombie === 0) && (newGame.zombies.length <= 0) && (newGame.lives > 0)) {
      newGame.roundOver();
    }
  }

}
animate()