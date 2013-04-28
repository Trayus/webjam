var rainarray = new Array();
function updateRain(elapsedtime) {
    var x = Math.floor(Math.random() * 1200);
    rainarray.push(new Rectangle(x, -10, 2, 15, 0, 150, 255));
	x = Math.floor(Math.random() * 1200);
    rainarray.push(new Rectangle(x, -10, 2, 15, 0, 150, 255));
	x = Math.floor(Math.random() * 1200);
    rainarray.push(new Rectangle(x, -10, 2, 15, 0, 150, 255));
   
    for(var i = 0; i < rainarray.length; i++)
    {
        rainarray[i].y += 10 * elapsedtime;
	    if (rainarray[i].y > 700){ rainarray.splice(i, 1); i--; continue; }
	    if (checkRain(rainarray[i])){ rainarray.splice(i, 1); i--; continue; }
    }
}
function checkPlayer(player)
{
	for(var i = 0; i < rainarray.length; i++)
	{
		if (rainarray[i].collide(player.rectangle))
		{
			player.resize(1);
			rainarray.splice(i, 1);
		}
	}
}

function drawRain() {
	for(var i = 0; i < rainarray.length; i++)
	{
		rainarray[i].draw();
	}
}