class Rope
{
    constructor(bodyA,pointB)
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.003,
            lenght:100
        }
        this.pointB=pointB;
        this.Rope=Constraint.create(options);
        World.add(world,this.Rope);
    }
    display()
    {
        if(this.Rope.bodyA)
        {
            var pointA=this.Rope.bodyA.position;
            var pointB=this.pointB;
            push()
            strokeWeight(0)
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }
}