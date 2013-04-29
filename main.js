function draw()
{
	var bg = new Rectangle(0,0, 1200, 600, 10, 30, 80);
	bg.draw();
		
	drawMap();
	
	if (active)
	{
		drawRain();
		drawProjectiles();
		player1.draw();
		player2.draw();
	}
	else
	{
		var canvas = document.getElementById("canvas");
	    var ctx = canvas.getContext('2d');
		if (winner == 0)
		{
			ctx.font = 'bold 40pt Calibri';
			ctx.fillStyle = '#ffffff';
			ctx.fillText('RainFighter', 50, 100);
		}
		else
		{
			ctx.fillStyle = "rgba(" + winner.rectangle.red + "," + 
				winner.rectangle.green + "," + winner.rectangle.blue + "," + winner.rectangle.alpha + ")";
			ctx.font = 'bold 40pt Calibri';	
			ctx.fillText('Player ' + winner.num + ' wins', 50, 100);			
		}
		
		ctx.font = 'italic 20pt Calibri';
		ctx.fillStyle = '#cccccc';
		ctx.fillText('Press SPACE to start a new match', 50, 50);
	}
}

function update()
{
	var dtime = 1;
    
	if (active)
	{
	    updateWind(dtime);
		updateRain(dtime);
		updateProjectiles(dtime);
		player1.update(dtime);
		player2.update(dtime);
		checkPlayer(player1);
		checkPlayer(player2);
		
		if (player1.rectangle.x < -100 || player1.rectangle.x > 1300 || player1.rectangle.y > 700)
		{
			active = false;
			winner = player2;
			death.play();
		}
		if (player2.rectangle.x < -100 || player2.rectangle.x > 1300 || player2.rectangle.y > 700)
		{
			active = false;
			winner = player1;
			death.play();
		}
	}
	else
	{
		if (space) reset();
	}
}

function gameloop()
{
	update();
	draw();
}

/** initiation code **/
map.push(new Rectangle(100, 550, 380, 150, 250, 250, 250));
map.push(new Rectangle(720, 550, 380, 150, 250, 250, 250));
map.push(new Rectangle(1100, 320, 40, 160, 250, 250, 250));
map.push(new Rectangle(60, 320, 40, 160, 250, 250, 250));
map.push(new Rectangle(850, 430, 120, 20, 250, 250, 250));
map.push(new Rectangle(230, 430, 120, 20, 250, 250, 250));
map.push(new Rectangle(140, 200, 30, 30, 250, 250, 250));
map.push(new Rectangle(1040, 200, 30, 30, 250, 250, 250));
map.push(new Rectangle(400, 320, 400, 20, 250, 250, 250));

var player1;
var player2;
var active = false;
var winner = 0;

var snd = new Audio("rain-01.mp3");
snd.loop = true;
snd.play();
var death = new Audio("death.wav");

function reset()
{
	player1 = new Player(250, 50, 1);
	player2 = new Player(950, 50, 2);
	active = true;
	projectiles = new Array();
}
setInterval(gameloop, 20);
draw();
