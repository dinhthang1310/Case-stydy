class Brick {
    constructor(x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext("2d");
    }
    drawBrick() {
        this.ctx.beginPath();
        this.ctx.rect(this.x,this.y,this.w,this.h);
        this.ctx.fillStyle = "#204ad3";
        this.ctx.fill();
        this.ctx.closePath();
    }

}
