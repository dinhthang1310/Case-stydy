
// setInterval(function () {
//     ctx.clearRect(0,0,canvas.weight, canvas.height);
//     drawBall();
//
//     x += 2;
//     y += 2;
// },200);
class Ball {
    constructor(x,y,r) {
        this.x = myCanvas.width / 2;
        this.y = myCanvas.height / 2;
        this.r = 10;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext("2d");
    }
    drawBall() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "#204ad3";
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
    }

}


