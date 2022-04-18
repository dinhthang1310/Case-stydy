let ball = new  Ball(0,0,0,0);
let bar = new Bar(0,0,50,15);
let brick = new Brick(0,0,60,20)
ball.drawBall();
bar.drawBar();
brick.drawBrick();

//  document.addEventListener('keypress',function (event) {
//     console.log(event);
// });
document.addEventListener('keyup',function (event) {
    console.log('KEY UP');
    console.log(event);
});
document.addEventListener('keydown',function (event) {
    console.log('KEY DOWN');
    console.log(event);
});