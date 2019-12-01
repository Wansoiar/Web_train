// 设定画布
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// 设定画布长宽
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// 生成随机数的函数
function random(min,max) {
  return Math.floor(Math.random()*(max-min)) + min;
}

// 生成随机颜色的函数
function randomColor() {
  return 'rgb(' +
         random(0, 255) + ', ' +
         random(0, 255) + ', ' +
         random(0, 255) + ')';
}
function Ball(x, y, velx, vely, color, size){
  this.x = x;
  this.y = y;
  this.velx = velx;
  this.vely = vely;
  this.color = color;
  this.size = size;
}

Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

Ball.prototype.update = function () {
  if((this.x + this.size) >= width || (this.x + this.size) <= 0){
    this.velx = -(this.velx);
  }
  if((this.y + this.size) >= height || (this.y + this.size) <= 0){
    this.vely = -(this.vely);
  }

  this.x += this.velx;
  this.y += this.vely;
}
Ball.prototype.collisionDetect = function () {
  for(var j = 0; j < balls.length; j++){
    if(this !== balls[j]){
      var dx = (this.x + this.size) - (balls[j].x + balls[j].size);
      var dy = (this.y + this.size) - (balls[j].y + balls[j].size);
      var distance = Math.sqrt(dx * dx + dy * dy);

      if(distance < (this.size + balls[j].size)){
        balls[j].color = this.color = randomColor();
        balls[j].velx = -(balls[j].velx);
        balls[j].vely = -(balls[j].vely);
        this.velx = -(this.velx);
        this.vely = -(this.vely);
      }
    }
  }
}

var balls = [];

function loop(){
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height); //画出一个矩形覆盖之前的页面，即覆盖动画上一帧的小球，否则画面将是一条蛇状的

  while(balls.length < 25){
    var ball = new Ball(
        random(0, width),
        random(0, length),
        random(-7, 7),
        random(-7, 7),
        randomColor(),
        random(10, 20)
    );
    balls.push(ball);
  }
  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  requestAnimationFrame(loop);

}
loop();