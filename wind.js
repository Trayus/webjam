var runwind = 0;
var startwind = 0;
var timewind = 0;
var windspeed = 0;

function updateWind(elapsedtime) {
   if(runwind-- > 0) {
	   if(timewind % 100 == 1) {
		  windspeed = Math.sin(timewind);
	   }
	   
	   for(var i = 0; i < rainarray.length; i++) {
		  rainarray[i].x += windspeed * 3 * elapsedtime;
	   }
	   
	   player1.rectangle.x += windspeed * 0.5 * elapsedtime;
	   player2.rectangle.x += windspeed * 0.5 * elapsedtime;
	   
	   timewind++;
   }
   else {
      if(startwind == 400) {
	     startwind = 0;
		 runwind = 400;
	  }
	  else {
	     startwind++;
	  }
   }
}