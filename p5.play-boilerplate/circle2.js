class Circle2
{
    constructor(x,y,radius)
    {   
        var options =
        {
            isStatic: false
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
        //circle(180,350,10);
        //circle(280,350,this.body.radius);
        
    }
}