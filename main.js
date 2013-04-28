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

map.push(new Rectangle(190, 510, 800, 40, 250, 250, 250));
map.push(new Rectangle(300, 350, 200, 10, 250, 250, 250));
map.push(new Rectangle(650, 250, 200, 10, 250, 250, 250));

console.log(map);

setInterval(gameloop, 50);
draw();
