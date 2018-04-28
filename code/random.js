function Random(min, max) {
	var x = Math.floor((Math.random() * max) + min);
	return x;
}
function randmeme() {	
	var x = Random(1,17);
	var y = 'memes/' + x + '.png';
	window.open(y);
	 }
randmeme();
