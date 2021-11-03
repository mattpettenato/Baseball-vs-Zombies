const board = document.getElementById('board');
const ctx = board.getContext('2d');
board.width = 1000;
board.height = 700;

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
    ctx.strokeStyle = this.color;
    ctx.strokeRect(this.x, this.y, 100, 100);
  }

  populateGrid() {
    for (let y = this.unitSize; y < board.height - 100; y += this.unitSize) {
      for (let x = this.unitSize; x < board.width - 100; x += this.unitSize) {
        this.unitData.push(new Board(x, y));
      }
    }
  }

  drawTitle(){
    ctx.fillStyle = ('blue');
    ctx.font = "30px Arial";
    ctx.textAlign = "start";
    ctx.fillText('Baseball vs. Zombies', 300, 60);
  }
  }
