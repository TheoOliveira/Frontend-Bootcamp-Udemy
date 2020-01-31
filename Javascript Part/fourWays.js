var docOne = document.getElementsByTagName('p')[0];
var docTwo = document.getElementById('first');
var docThree = document.getElementsByClassName('special')[0];
var docFour = document.querySelector('.special');



setInterval(function () {
	docOne.classList.add('big');
	
}, 2000);


var text2 = docOne.innerHTML;
var text1 = docOne.textContent;

//docOne.classList.add('normal');

