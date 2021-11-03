export default class BaseballPlayer {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.health = 100;
    this.team = [];
  }
  drawPlayer() {
    ctx.fillStyle = 'rgb(89	136	93	)';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = ('red');
    ctx.font = "12px Arial";
    ctx.textAlign = "start";
    ctx.fillText(this.health, this.x, this.y + 10);
  }
  drawTeam() {
    for (let i = 0; i < this.team.length; i++) {
      this.team[i].drawPlayer();
    }
    // console.log(this.team)
  }
// drawTeam();
}

