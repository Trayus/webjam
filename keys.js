var w = false, a = false, s = false, d = false, ab1 = false;
var up = false, left = false, down = false, right = false, ab2 = false;
var space;

document.addEventListener('keydown', function(event) {
	//console.log("event down " + event.keyCode);
    if(event.keyCode == 74) {
		left = true;
    }
    else if(event.keyCode == 76) {
		right = true;
    }
    else if(event.keyCode == 73) {
		up = true;
    }
    else if(event.keyCode == 75) {
		down = true;
    }
    else if(event.keyCode == 78) {
		ab2 = true;
		//console.log("right: " + right + " left: " + left + " up: " + up + " down: " + down);
    }
	
    if(event.keyCode == 32) {
		space = true;
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
    else if(event.keyCode == 67) {
		ab1 = true;
    }
});


document.addEventListener('keyup', function(event) {
	//console.log("event up " + event.keyCode);
    if(event.keyCode == 74) {
		left = false;
    }
    else if(event.keyCode == 76) {
		right = false;
    }
    else if(event.keyCode == 73) {
		up = false;
    }
    else if(event.keyCode == 75) {
		down = false;
    }
    else if(event.keyCode == 78) {
		ab2 = false;
    }
	
    if(event.keyCode == 32) {
		space = false;
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
    else if(event.keyCode == 67) {
		ab1 = false;
    }
});