function draw()
{
	var bg = new Rectangle(0,0, 1200, 600, 10, 30, 80);
	bg.draw();
		
	drawMap();
	
	drawRain();
	
	player1.draw();
	player2.draw();
}

function update()
{
	var dtime = 1;
    
	updateRain(dtime);
	player1.update(dtime);
	player2.update(dtime);
}

function gameloop()
{
	update();
	draw();
}

/** initiation code **/
map.push(new Rectangle(10, 500, 1000, 50, 250, 250, 250));
map.push(new Rectangle(700, 420, 200, 15, 250, 250, 250));
map.push(new Rectangle(50, 300, 50, 150, 250, 250, 250));

var player1 = new Player(250, 50, 1);
var player2 = new Player(950, 50, 2);

setInterval(gameloop, 20);
draw();
