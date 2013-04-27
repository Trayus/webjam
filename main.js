function draw()
{
	var bg = new Rectangle(0,0, 1200, 600, 10, 30, 80);
	bg.draw();
		
	drawMap();
	
}

function update()
{

}

function gameloop()
{
	update();
	draw();
}

/** initiation code **/
map.push(new Rectangle(10, 10, 100, 100, 250, 250, 250));
map.push(new Rectangle(200, 50, 10, 50, 250, 250, 250));
console.log(map);



setInterval(gameloop, 50);
draw();
