var Player = function(x, y, num)
{
	this.size = 20,
	this.num = num,
	this.falling = false,
	this.varjump = false,
	this.velocity = { 'x': 0, 'y': 0 },
	this.acceleration = { 'x': 0, 'y': 0 },
	this.rectangle = new Rectangle(x, y, this.size, this.size, 0, num == 1? 250 : 200, num == 1? 50 : 250),
	
	this.update = function(elapsedtime)
	{
		acc = 0.2;
		maxvx = 3.5 * 30 / this.size;
		maxvy = 10;
		jumpstr = -10;
	
		if (this.num == 1)
		{
			if (d && !a) this.acceleration.x = acc;
			else if (a && !d) this.acceleration.x = -acc;
			else this.acceleration.x = 0;
		}
		else
		{
			if (right && !left) this.acceleration.x = acc;
			else if (left && !right) this.acceleration.x = -acc;
			else this.acceleration.x = 0;
		}
		this.velocity.x += this.acceleration.x * elapsedtime;
		if (this.acceleration.x == 0) this.velocity.x /= 1.3;
		
		if (this.velocity.x > maxvx) this.velocity.x = maxvx;
		if (this.velocity.x < -maxvx) this.velocity.x = -maxvx;
		this.rectangle.x += this.velocity.x * elapsedtime;
		
		if (this.falling)
			this.velocity.y += gravity * elapsedtime * this.varjump? 0.5 : 1;
		else if ((this.num != 1 && up) || (this.num == 1 && w))
		{ this.velocity.y = jumpstr; this.falling = true; this.varjump = true; }
		
		if (((this.num != 1 && !up) || (this.num == 1 && !w)))
			this.varjump = false;
		
		if (this.velocity.y > maxvy) this.velocity.y = maxvy;
		if (this.velocity.y < -maxvy) this.velocity.y = -maxvy;
		this.rectangle.y += this.velocity.y * elapsedtime;
		
		if (checkAndReact(this))
			this.falling = false;
		if (checkFalling(this))
			this.falling = true;
	},
	
	this.draw = function()
	{
		this.rectangle.draw();
	}
}