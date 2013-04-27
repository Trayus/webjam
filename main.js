function draw()
{
	
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
map.push(new Rectangle(10, 10, 100, 100));
map.push(new Rectangle(200, 50, 10, 50));
console.log(map);



setInterval(gameloop, 50);
draw();
