import BaseballPlayer from './scripts/baseball_player';
import Game from './scripts/game';

document.addEventListener('DOMContentLoaded', function() {
  const board = document.getElementById('board');
  const ctx = board.getContext('2d');

  const canvas1 = document.getElementById('canvas1');
  const ctx1 = board.getContext('2d');

  const newGame = new Game();
  // let gameState = true;
  // let gamePause = false;

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
    // console.log('Out of Tower Tokens')
    return;
  }
})

const boardPos = board.getBoundingClientRect();
board.addEventListener('mousemove', function (event) {
  newGame.board.mouse.x = event.x - boardPos.left;
  newGame.board.mouse.y = event.y - boardPos.top
})

// let pauseGame()
function animate() {
  // console.log(gamePause)
  // console.log(newGame.lives)
  newGame.drawTitle();
  newGame.drawCell(ctx);
  if (newGame.gameStatus === false) {

    newGame.drawPAUSE();
  }
  if (newGame.gameStatus === true) {
    ctx.clearRect(0, 0, board.width, board.height);
    newGame.drawTitle();
    newGame.drawCell(ctx);
    newGame.drawTeam();
    newGame.drawEnemy();
    newGame.stillZom();
    newGame.drawBall();
    newGame.playerHit();
    newGame.checkZom();
    newGame.checkPlayer();
    newGame.ballHit();
    newGame.frame++;
    if (newGame.lives != 0 && newGame.gameStatus === true) {
      requestAnimationFrame(animate);

    } else if (newGame.lives === 0){
      // console.log('over over over over over')
      newGame.zombies = [];
      newGame.player.team = [];
      newGame.projectiles = [];

      // ctx.clearRect(0, 0, board.width, board.height);
      newGame.drawTitle();

      newGame.drawEnd();
      // requestAnimationFrame(animate);

    }
  }

    if ((newGame.numZombie === 0) && (newGame.zombies.length <= 0) && (newGame.lives > 0)) {
      newGame.roundOver();
    }
  // requestAnimationFrame(animate);

  }
  // console.log(newGame.gameStatus)

if (newGame.gameStatus === false){
  animate()
} else {
  // cancelAnimationFrame(animate);
  // console.log('zipzap')

  // animate()

}

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

let song = new Audio();
song.src = './music/song.mp3'
btn1.addEventListener('click', function(){
  song.volume = 0.05
  song.play();
  song.addEventListener('ended', function(){
    song.play();
    // console.log('song ended. restarting')
  })
  btn2.addEventListener('click', function(){
    song.pause();
  })
})

btn3.addEventListener('click', function (){
  // console.log('hello')
  newGame.restartGame();
  animate()

});

btn4.addEventListener('click', function (){
  // console.log('hello')
  // newGame.gameStatus = true
  // console.log(newGame.gameStatus)
  newGame.pauseGame()
  // cancelAnimationFrame(animate);
});

btn5.addEventListener('click', function (){
  // console.log('starting')
  newGame.startGame();
  // console.log(newGame.gameStatus)
  // gamePause = true;
  animate()
});

})
