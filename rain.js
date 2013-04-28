var rainarray = new Array();
var raincount = 0;
function updateRain(elapsedtime) {
    var x = Math.floor(Math.random() * 1200);
    rainarray.push(new Rectangle(x, 10, 3, 10, 0, 150, 255));
    raincount = 0;
   
   for(var i = 0; i < rainarray.length; i++)
   {
      rainarray[i].y += 10 * elapsedtime;
   }
   
   raincount++;
}

function drawRain() {
	for(var i = 0; i < rainarray.length; i++)
	{
		rainarray[i].draw();
	}
}