var Rectangle = function(x, y, w, h, r, g, b)
{
	this.x = x,
	this.y = y,
	this.width = w,
	this.height = h,
	this.red = r,
	this.green = g,
	this.blue = b,
	this.alpha = 1,
	
	this.collide = function(other)
	{
		if (this.x < other.x + other.width && this.x + this.width > other.x &&
			this.y < other.y + other.height && this.y + this.height > other.y)
		{
			return true;
		}
		return false;
	   
	},
	
	this.draw = function()
	{
	   var canvas = document.getElementById("canvas");
	   var ctx = canvas.getContext('2d');
	   ctx.fillStyle = "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha + ")"; 
	   ctx.fillRect(this.x, this.y, this.width, this.height);
	   
	}
};