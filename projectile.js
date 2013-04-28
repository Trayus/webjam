var projectiles = new Array();
var knockback = 1.5;

var Projectile = function(x, y, shotby, vx, vy)
{
	this.time = 100;
	this.rectangle = new Rectangle(x, y, 8, 8, shotby.rectangle.red, shotby.rectangle.green, shotby.rectangle.blue);
	this.velocity = { 'x': vx, 'y': vy },
	this.shotby = shotby,
	
	this.update = function(elapsedtime)
	{
		this.rectangle.x += this.velocity.x;
		this.rectangle.y += this.velocity.y;
		this.time--;
	},
	
	this.checkHit = function(rect)
	{
		return this.rectangle.collide(rect);
	}
	
	this.draw = function()
	{
		this.rectangle.draw();
	}
}

function updateProjectiles(elapsedtime)
{
	for (ndx = 0 ; ndx < projectiles.length; ndx++)
	{
		projectiles[ndx].update(elapsedtime);
		if (checkProjectile(projectiles[ndx]) || projectiles[ndx].time == 0)
		{
			projectiles.splice(ndx, 1);
			ndx--;
		}
	}
}

function checkHit(player)
{
	for (i = 0 ; i < projectiles.length; i++)
	{
		if (projectiles[i].shotby != player && projectiles[i].checkHit(player.rectangle))
		{
			player.velocity.x += projectiles[i].velocity.x * knockback;
			player.velocity.y += projectiles[i].velocity.y * knockback;
			projectiles.splice(i, 1);
			i--;
		}
	}
}

function drawProjectiles()
{
	for (i = 0 ; i < projectiles.length; i++)
	{
		projectiles[i].draw();
	}
}