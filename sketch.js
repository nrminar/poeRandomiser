let bubbles = [];

setup = function(){
  createCanvas(windowWidth, windowHeight).id('bubbles');
    for(let i=0; i<150; i++){
        bubbles.push(new Bubbles());
    }
}
draw = function(){
  background(0,0,0, 40);
    for(let i=0; i<bubbles.length; i++){
        bubbles[i].show();
        bubbles[i].update();
        bubbles[i].edges();
    }
}
class Bubbles{
    constructor(){
        this.pos = createVector(random(width), random(height));
        this.r = random(5, 25);
        this.vel = p5.Vector.random2D();
    }
    show(){
        stroke(255);
        fill('rgba(255,255,255, 0.7)');
        ellipse(this.pos.x, this.pos.y, this.r/2, this.r/2);
    }
    update(){
        this.pos.add(this.vel);
    }
    edges(){
        if(this.pos.x > width + this.r){
            this.pos.x = -this.r
        }else if(this.pos.x < -this.r){
            this.pos.x = width + this.r
        }
        if(this.pos.y > height + this.r){
            this.pos.y = -this.r
        }else if(this.pos.y < -this.r){
            this.pos.y = height + this.r
        }
    }
}