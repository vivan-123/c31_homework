class Circle
{
    constructor(x,y,radius)
    {   
        var options =
        {
            isStatic: true
        }

        this.body = Bodies.circle(x,y,radius,options)
        this.body.position.x = x;
        this.body.position.y = y;
        this.body.radius = radius;
        World.add(world, this.body);

       
    }

    display()
    {
        circle(this.body.position.x,this.body.position.y,this.body.radius);
    }
}