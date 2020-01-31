 alert("Hello!");
  
 //create a secret number
var secretNumber = 4;


// ask for guess
var guess = Number(prompt("Guess a Number:"));

//check guess

if(guess === secretNumber){
	alert("You got it right");
}
else if (guess > secretNumber) 
{
	alert("Too high. Try again");
} 

else {
	alert("Too low. Try again");
}