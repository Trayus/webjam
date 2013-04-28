var map = new Array();

function checkAndReact(player)
{
	for(i = 0; i < map.length; i++)
	{
		if (map[i].collide(player.rectangle))
		{
			// check what type of collision happened
			var topleft = checkPoint(player.rectangle.x, player.rectangle.y, map[i]);
			var topright = checkPoint(player.rectangle.x + player.rectangle.width, player.rectangle.y, map[i]);
			var botleft = checkPoint(player.rectangle.x, player.rectangle.y + player.rectangle.height, map[i]);
			var botright = checkPoint(player.rectangle.x + player.rectangle.width, player.rectangle.y + player.rectangle.height, map[i]);
			var numcollisions = (topleft? 1 : 0) + (topright? 1 : 0) + (botleft? 1 : 0) + (botright? 1 : 0);			
			
			if (numcollisions == 1)
			{
				if (topleft || topright){ player.rectangle.y = map[i].y + map[i].height; player.velocity.y = 0; }
				if (botleft || botright){ player.rectangle.y = map[i].y - player.rectangle.height; return true; }
			}
			else if (numcollisions == 2)
			{
				if (topleft && topright){ player.rectangle.y = map[i].y + map[i].height;  player.velocity.y = 0; }
				if (botleft && botright){ player.rectangle.y = map[i].y - player.rectangle.height; return true; }
				if (topleft && botleft) { player.rectangle.x = map[i].x + map[i].width; console.log("HAI");}
				if (topright && botright) player.rectangle.x = map[i].x - player.rectangle.width;
			}
			else
			{
				// you're screwed...
			}
		}
	}
	return false;
}

function checkPoint(x, y, rect)
{
	if (x > rect.x && x < rect.x + rect.width && y > rect.y && y < rect.y + rect.height)
		return true;
	return false;
}

function checkFalling(player)
{
	player.rectangle.y += 2;
	
	for(i = 0; i < map.length; i++)
	{
		if (map[i].collide(player.rectangle))
		{
			player.rectangle.y -= 2;
			return false;
		}
	}
	
	player.rectangle.y -= 2;
	return true;
}

function drawMap()
{
	for(i = 0; i < map.length; i++)
	{
		map[i].draw();
	}
}
