const board = document.getElementById('board');
const ctx = board.getContext('2d');
board.width = 1000;
board.height = 700;
// const unitSize = 100; // each piece is 100px x 100 px
// const unitData = []; // will store data about unit here
// const team = [];

// const zombies = [];
// let frame = 0;

// const selectPiece = {
//   width: board.width,
//   height: unitSize
// }

export default class Board {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.unitData = [];
    this.unitSize = 100;
    this.width = this.unitSize;
    this.height = this.unitSize;
    this.color = 'black'
    this.mouse = {
      x: undefined,
      y: undefined,
      width: 0.1,
      height: 0.1,
    }
    
  }
  drawGrid(ctx) {
    // console.log(ctx);
    ctx.strokeStyle = this.color;
    // console.log(this.x)
    // console.log(this.y)
    ctx.strokeRect(this.x, this.y, 100, 100);
  }

  populateGrid() {
  for (let y = this.unitSize; y < board.height - 100; y += this.unitSize) {
    for (let x = this.unitSize; x < board.width - 100; x += this.unitSize) {
      // console.log(x)
      // console.log(y)
      this.unitData.push(new Board(x, y));
    }
  }
  // console.log(this.unitData)
}
// populateGrid();
}


// board.addEventListener('click', function(event) {
//   const xPos = mouse.x - (mouse.x % this.unitSize);
//   const yPos = mouse.y - (mouse.y % this.unitSize);
//   if (yPos < 100 || yPos > 500 || xPos < 100 || xPos > 800) return;
//   var i;
//   for (i = 0; i < this.team.length; i++) {
//     if (team[i].x === xPos && team[i].y === yPos) return;
//   }
//   if (towerToken > 0) {
//     team.push(new BaseballPlayer(xPos, yPos));
//     towerToken = towerToken - 1;
//     console.log(towerToken)
//   } else {
//     console.log('Out of Tower Tokens')
//     return;
//   }
// })



// function drawCell(){
//   ctx.fillStyle = ('red');
//   ctx.font = "25px Arial";
//   ctx.textAlign = "start";
//   // ctx.fillText(towerToken + " tower tokens", 100, 75)
//   ctx.fillText(numZombie + " zombies left", 500, 75)
//   for (let i = 0; i < unitData.length; i++) {
//     unitData[i].draw();
//   }
// }

// function drawBoard() {
//   ctx.clearRect(0, 0, board.width, board.height);
//   ctx.fillStyle = "rgb(214 162	71	)";
//   ctx.fillRect(0, 0, selectPiece.width, selectPiece.height);
//   ctx.fillRect(0, 600, selectPiece.width, selectPiece.height);
//   // drawCell();
//   // drawTeam();
//   // drawEnemy();
//   // drawRound();
//   // roundOver();
//   frame ++
//   requestAnimationFrame(drawBoard);
// }
// drawBoard();


