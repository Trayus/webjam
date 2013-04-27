function draw()
{

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');
	ctx.fillRect(25, 25, 25, 50);
	
	console.log("hai");
	
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
