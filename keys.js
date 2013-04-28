var w = false, a = false, s = false, d = false, ab1 = false;
var up = false, left = false, down = false, right = false, ab2 = false;

document.addEventListener('keydown', function(event) {
	//console.log("event down " + event.keyCode);
    if(event.keyCode == 37) {
		left = true;
    }
    else if(event.keyCode == 39) {
		right = true;
    }
    else if(event.keyCode == 38) {
		up = true;
    }
    else if(event.keyCode == 40) {
		down = true;
    }
    else if(event.keyCode == 17) {
		ab2 = true;
    }
	
	if(event.keyCode == 87) {
		w = true;
    }
    else if(event.keyCode == 65) {
		a = true;
    }
    else if(event.keyCode == 83) {
		s = true;
    }
    else if(event.keyCode == 68) {
		d = true;
    }
    else if(event.keyCode == 32) {
		ab1 = true;
    }
});


document.addEventListener('keyup', function(event) {
	//console.log("event up " + event.keyCode);
    if(event.keyCode == 37) {
		left = false;
    }
    else if(event.keyCode == 39) {
		right = false;
    }
    else if(event.keyCode == 38) {
		up = false;
    }
    else if(event.keyCode == 40) {
		down = false;
    }
    else if(event.keyCode == 17) {
		ab2 = false;
    }
	
	if(event.keyCode == 87) {
		w = false;
    }
    else if(event.keyCode == 65) {
		a = false;
    }
    else if(event.keyCode == 83) {
		s = false;
    }
    else if(event.keyCode == 68) {
		d = false;
    }
    else if(event.keyCode == 32) {
		ab1 = false;
    }
});