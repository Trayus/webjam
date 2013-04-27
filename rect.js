var Rectangle = function()
{
	this.x = 0,
	this.y = 0,
	this.width = 10,
	this.height = 10,
	this.red = 0,
	this.green = 0,
	this.blue = 0,
	
	this.collide = function(other)
	{
	   
	},
	
	this.draw = function()
	{
	   var canvas = document.getElementById("canvas");
	   var ctx = canvas.getContext('2d');
	   ctx.fillRect(x, y, width, height);
	   ctx.fillStyle = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")"; 
	   
	}
};