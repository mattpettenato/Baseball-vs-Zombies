import BaseballPlayer from './scripts/baseball_player.js';
import Game from './scripts/game.js';

const board = document.getElementById('board');
const ctx = board.getContext('2d');

const canvas1 = document.getElementById('canvas1');
const ctx1 = board.getContext('2d');


const newGame = new Game();
let gameState = true;

board.addEventListener('click', function(event) {
  const xPos = newGame.board.mouse['x'] - (newGame.board.mouse['x'] % newGame.board.unitSize);
  const yPos = newGame.board.mouse['y'] - (newGame.board.mouse['y'] % newGame.board.unitSize);

  if (yPos < 100 || yPos > 500 || xPos < 100 || xPos > 800) return;
  for (let i = 0; i < newGame.player.team.length; i++) {
    if (newGame.player.team[i].x === xPos && newGame.player.team[i].y === yPos) return;
  }
  if (newGame.towerToken > 0) {
    newGame.player.team.push(new BaseballPlayer(xPos, yPos));
    newGame.towerToken = newGame.towerToken - 1;
  } else {
    console.log('Out of Tower Tokens')
    return;
  }
})

const boardPos = board.getBoundingClientRect();
board.addEventListener('mousemove', function (event) {
  newGame.board.mouse.x = event.x - boardPos.left;
  newGame.board.mouse.y = event.y - boardPos.top
})


function animate() {
  if (gameState === true) {
    ctx.clearRect(0, 0, board.width, board.height);
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