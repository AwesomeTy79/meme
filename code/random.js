function Random(min, max) {
	var x = Math.floor((Math.random() * max) + min);
	return x;
}
var x = Random(0,2);
if (x === 0) { alert('false'); }
else if (x === 1) { alert('true'); }

