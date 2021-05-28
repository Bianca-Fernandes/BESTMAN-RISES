class Drop{
    constructor(x,y){
        var options = {
            restitution: 0.1,
            friction:0.01
        }
    this.drop = Bodies.circle(x,y,5,options);
    this.radius = 5
    World.add(world, this.drop);
    }   
    
    update(){
        if(this.drop.position.y > height){
            Matter.Body.setPosition(this.drop, {x:random(0,400), y:random(0,400)})   
    }}
    
    createDrop(){
        fill("lightblue");
        ellipseMode(CENTER);
        ellipse(this.drop.position.x, this.drop.position.y, this.radius, this.radius);
    }
}