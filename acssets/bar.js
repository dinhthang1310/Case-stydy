class Bar {
    constructor(x,y,h,w,speed) {
        this.x = 0;
        this.y = myCanvas.height - 10;
        this.h = 10;
        this.w = 70;
        this.speed = 40;
        this.cavas = document.getElementById('myCanvas');
        this.ctx = this.cavas.getContext("2d");
    }
    drawBar() {
        this.ctx.beginPath();
        this.ctx.rect(this.x,this.y,this.w,this.h);
        this.ctx.fillStyle = "red";
        this.ctx.fill();
        this.ctx.closePath();
    }
    checkKeydow(event) {
        if (event.keyCode == 40) {
            this.x -= this.speed;
        }else if (event.keyCode == 40) {
            this.x += this.speed;
        }


            }

}