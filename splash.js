var Splash = function(x, y, num)
{
   this.size = 3;
   this.num = num,
   this.falling = false,
   this.varjump = false,
   this.velocity = { 'x': 0, 'y': 0 },
   this.acceleration = { 'x': 0, 'y': 0 },
   this.rectangle = new Rectangle(x, y, this.size, this.size, 0, 150, 255),
   
   
}