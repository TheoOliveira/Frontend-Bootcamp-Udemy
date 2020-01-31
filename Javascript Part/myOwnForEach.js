var colors = ["red", "orange"];

function myForEach(arr, func){
	for (let i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

myForEach(colors, alert);