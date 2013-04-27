function draw()
{

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');
	ctx.fillRect(25, 25, 25, 50);
	
	console.log("hai");
	
	
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


setInterval(gameloop, 50);
draw();
