function Random(min, max) {
	var x = Math.floor((Math.random() * max) + min);
	return x;
}
var x = Random(1,17);
var y = x + '.png';
$(".meme").attr("src",y);
