var Rectangle = function(x, y, w, h)
{
	this.x = x,
	this.y = y,
	this.width = w,
	this.height = h,
	
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
		
	}
};