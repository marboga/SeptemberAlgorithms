var object = {
	  'handedness': 'right', 'name': 'Michael'
}

console.log(object);
for(var balloon in object) {
	console.log(balloon);
	console.log(object[balloon]);
}

var array = [1,23,4];
for (var i = 0; i < array.length; i++) {
	console.log(i);
	console.log(array[i]);
}
