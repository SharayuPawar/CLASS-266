class launcher{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10

        }
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher)

    }
    display(){
        var pointA=this.launcher.bodyA.position;
        var pointB=this.launcher.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    fly(){
        this.launcher.bodyA=null;
    }
    attach(someBody){
        this.launcher.bodyA= someBody
    }

}

