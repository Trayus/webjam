var nprojspeed = 8;
var dprojspeed = 12;
var minnproj = 24;
var mindproj = 22;
var spread = 4;
var ncost = 20;
var dcost = 10;

var Player = function(x, y, num)
{
	this.size = 20,
	this.num = num,
	this.attacked = false;
	this.falling = false,
	this.varjump = false,
	this.velocity = { 'x': 0, 'y': 0 },
	this.acceleration = { 'x': 0, 'y': 0 },
	this.rectangle = new Rectangle(x, y, this.size, this.size, num == 1? 0 : 250, num == 1? 250 : 30, num == 1? 50 : 80),
	
	this.resize = function(size)
	{
		if ((size > 0 && this.size < 60) || (size < 0 && this.size > 20))
		{
			this.size += size;
			this.rectangle.x -= size / 2;
			this.rectangle.width += size;
			this.rectangle.y -= size / 2;
			this.rectangle.height += size;
		}
	},
	
	this.checkAttack = function()
	{
	    console.log("attacked: " + this.attacked + this.num);
		if (this.num == 1 && ab1 && !this.attacked)
		{
			this.attacked = true;
			if (!d && !a && !w && !s && this.size > minnproj)
			{
				this.velocity.x = 0;
				this.velocity.y = -5;
				
				for (i = 0; i < 360; i += 20)
				{
					var dir = i / 180.0 * 3.14;
					var dx = Math.cos(dir);
					var dy = Math.sin(dir);
					
					projectiles.push(new Projectile(this.rectangle.x + this.rectangle.width / 2 + dx * this.size / 2, 
						this.rectangle.y + this.rectangle.height / 2 + dy * this.size / 2, this,
						dx * nprojspeed + Math.random() / 4, dy * nprojspeed + Math.random() / 4));
				}
					
				this.resize(-5);
				
			}
			else if ((d || a || w || s) && this.size > mindproj)
			{
				var angle;
				if (a ^ d && w ^ s) // diagonal
				{
					if (a && !d && w && !s) angle = 225;
					if (d && !a && w && !s) angle = 315;
					if (a && !d && s && !w) angle = 135;
					if (d && !a && s && !w) angle = 45;
				}
				else
				{
					if (a && !d && !(w^s)) angle = 180;
					if (d && !a && !(w^s)) angle = 0;
					if (w && !s && !(a^d)) angle = 270;
					if (s && !w && !(a^d)) angle = 90;
				}
				angle = angle / 180.0 * 3.14;
				var dx = Math.cos(angle);
				var dy = Math.sin(angle);
				
				for (i = 0; i < 7; i ++)
				{
					projectiles.push(new Projectile(this.rectangle.x + this.rectangle.width / 2 + dx * this.size / 2, 
						this.rectangle.y + this.rectangle.height / 2 + dy * this.size / 2, this, 
						dx * dprojspeed + (Math.random() - 0.5) * spread, dy * dprojspeed + (Math.random() - 0.5) * spread));
				}
				this.resize(-3);
				this.velocity.x -= dx * 999;
				this.velocity.y -= dy * 999;
			}
		}
			
		else if (this.num != 1 && ab2 && !this.attacked)
		{
		    this.attacked = true;
			if (!right && !left && !up && !down && this.size > minnproj)
			{
				this.velocity.x = 0;
				this.velocity.y = -5;
				
				for (i = 0; i < 360; i += 20)
				{
					var dir = i / 180.0 * 3.14;
					var dx = Math.cos(dir);
					var dy = Math.sin(dir);
					
					projectiles.push(new Projectile(this.rectangle.x + this.rectangle.width / 2 + dx * this.size / 2, 
						this.rectangle.y + this.rectangle.height / 2 + dy * this.size / 2, this, 
						dx * nprojspeed + Math.random() / 4, dy * nprojspeed + Math.random() / 4));
				}
				
				this.resize(-5);
			}
			else if ((right || left || up || down) && this.size > mindproj)
			{
				var angle;
				if (left ^ right && up ^ down) // diagonal
				{
					if (left && !right && up && !down) angle = 225;
					if (right && !left && up && !down) angle = 315;
					if (left && !right && down && !up) angle = 135;
					if (right && !left && down && !up) angle = 45;
				}
				else
				{
					if (left && !right && !(up^down)) angle = 180;
					if (right && !left && !(up^down)) angle = 0;
					if (up && !down && !(left^right)) angle = 270;
					if (down && !up && !(left^right)) angle = 90;
				}
				angle = angle / 180.0 * 3.14;
				var dx = Math.cos(angle);
				var dy = Math.sin(angle);
				
				for (i = 0; i < 7; i ++)
				{
					projectiles.push(new Projectile(this.rectangle.x + this.rectangle.width / 2 + dx * this.size / 2, 
						this.rectangle.y + this.rectangle.height / 2 + dy * this.size / 2, this, 
						dx * dprojspeed + (Math.random() - 0.5) * spread, dy * dprojspeed + (Math.random() - 0.5) * spread));
				}
				this.resize(-3);
				this.velocity.x -= dx * 999;
				this.velocity.y -= dy * 999;
			}
		}
		else if ((this.num == 1 && !ab1) || (this.num != 1 && !ab2))
		{
			this.attacked = false;
		}
	},
	
	this.update = function(elapsedtime)
	{
		acc = 0.2;
		maxvx = 3.5 * 60 / (this.size);
		maxvy = 12;
		jumpstr = -12;
	
		var shift = false;
		if (this.num == 1)
		{
			if (d && !a) this.acceleration.x = acc;
			else if (a && !d) this.acceleration.x = -acc;
			else this.acceleration.x = 0;
			
			if (d && !a && this.velocity.x < 0) { shift = true; this.acceleration.x = acc; }
			if (a && !d && this.velocity.x > 0) { shift = true; this.acceleration.x = -acc; }
		}
		else
		{
			if (right && !left) this.acceleration.x = acc;
			else if (left && !right) this.acceleration.x = -acc;
			else this.acceleration.x = 0;
			
			if (right && !left && this.velocity.x < 0) { shift = true; this.acceleration.x = acc; }
			if (left && !right && this.velocity.x > 0) { shift = true; this.acceleration.x = -acc; }
		}
		this.velocity.x += this.acceleration.x * elapsedtime;
		if (this.acceleration.x == 0 || shift) this.velocity.x /= 1.3;
		
		if (this.velocity.x > maxvx) this.velocity.x = maxvx;
		if (this.velocity.x < -maxvx) this.velocity.x = -maxvx;
		
		if (this.falling)
			this.velocity.y += gravity * elapsedtime * this.varjump? 0.5 : 1;
		else if ((this.num != 1 && up) || (this.num == 1 && w))
		{ this.velocity.y = jumpstr; this.falling = true; this.varjump = true; }
		
		if (((this.num != 1 && !up) || (this.num == 1 && !w)))
			this.varjump = false;
		
		if (this.velocity.y > maxvy) this.velocity.y = maxvy;
		if (this.velocity.y < -maxvy) this.velocity.y = -maxvy;
		
		checkHit(this);
		
		this.rectangle.x += this.velocity.x * elapsedtime;
		this.rectangle.y += this.velocity.y * elapsedtime;
		
		if (checkAndReact(this))
			this.falling = false;
		if (checkFalling(this))
			this.falling = true;
		if (!this.falling) this.velocity.y = 0;
			
		this.checkAttack();
	},
	
	this.draw = function()
	{
		this.rectangle.draw();
	}
}