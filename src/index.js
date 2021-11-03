import BaseballPlayer from './scripts/baseball_player.js';
import Game from './scripts/game.js';

const board = document.getElementById('board');
const ctx = board.getContext('2d');
const newGame = new Game();
const newPlayer = new BaseballPlayer



board.addEventListener('click', function(event) {
  const xPos = newGame.board.mouse['x'] - (newGame.board.mouse['x'] % newGame.board.unitSize);
  const yPos = newGame.board.mouse['y'] - (newGame.board.mouse['y'] % newGame.board.unitSize);

  if (yPos < 100 || yPos > 500 || xPos < 100 || xPos > 800) return;
  var i;
  for (i = 0; i < newGame.player.team.length; i++) {
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

var myVar;
function animate() {
  ctx.clearRect(0, 0, board.width, board.height);
  ctx.fillStyle = "rgb(214 162	71)";
  // ctx.fillRect(0, 0, 1000, 100);
  // ctx.fillRect(0, 600, 1000, 100);
  newGame.drawCell(ctx);
  newGame.player.drawTeam();
  newGame.drawEnemy();
  newGame.drawRound();
  if (newGame.numZombie === 0){
    // newGame.roundOver();
    roundend();
  }
  
  newGame.frame++;
  requestAnimationFrame(animate);
}
animate()

function roundend() {
  newGame.round = newGame.round + 1
  // newGame.numZombie = newGame.round * 2;
  newGame.towerToken = newGame.towerToken + 1;
  newGame.zombie.speedChange + 2;

  // this.round = newGame.round + 1;
  // 

  // this.newRound()
}
