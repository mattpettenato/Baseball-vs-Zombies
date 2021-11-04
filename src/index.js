import BaseballPlayer from './scripts/baseball_player.js';
import Game from './scripts/game.js';






document.addEventListener('DOMContentLoaded', function() {
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
  // add click git hub button and add the button img to canvas. then when click is in that region, the link is clicked.
  // do the same with start music and stop music and restart
})

const boardPos = board.getBoundingClientRect();
board.addEventListener('mousemove', function (event) {
  newGame.board.mouse.x = event.x - boardPos.left;
  newGame.board.mouse.y = event.y - boardPos.top
})


function animate() {
  // if (gameState === true) {
    ctx.clearRect(0, 0, board.width, board.height);
    newGame.drawCell(ctx);
  newGame.drawHelp(ctx);
  newGame.drawHelpt(ctx);
    newGame.drawTitle();
    // newGame.drawRound();
    newGame.drawTeam();
    newGame.drawEnemy();
    newGame.stillZom();
    // newGame.drawLives();
    newGame.drawBall();
    // newGame.drawScore();
    newGame.playerHit();
    newGame.checkZom();
    newGame.checkPlayer();
    newGame.ballHit();
    newGame.frame++;
    if (newGame.lives != 0) {
      // requestAnimationFrame(animate);
    } else {
      // gameState = false
      // cancelAnimationFrame(animate);
      // console.log('done')
      newGame.zombies = [];
      newGame.restartGame();
      // alert("Ran out of lives. You lost! Refresh page (F5) to play again. Or click through alert.");
      // newGame.lives = 0
      // requestAnimationFrame(animate);
      // gameState = true;
    }

    if ((newGame.numZombie === 0) && (newGame.zombies.length <= 0) && (newGame.lives > 0)) {
      newGame.roundOver();
    }
  requestAnimationFrame(animate);

  }

// }
animate()

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

let song = new Audio();
song.src = './music/song.mp3'
btn1.addEventListener('click', function(){
  song.volume = 0.05
  song.play();
  song.addEventListener('ended', function(){
    song.play();
    console.log('song ended. restarting')
  })
  btn2.addEventListener('click', function(){
    song.pause();
  })
  
})

btn3.addEventListener('click', function (){
  newGame.restartGame();
});

})
