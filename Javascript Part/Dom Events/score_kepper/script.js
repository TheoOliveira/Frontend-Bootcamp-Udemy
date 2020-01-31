const p1button = document.getElementById('p1');
const p2button = document.getElementById('p2');
const p1display = document.querySelector('#p1display');
const p2display = document.querySelector('#p2display');
const resetButton = document.getElementById('reset');
let spanDisplay = document.querySelector('p span');
let numInput = document.querySelector('input');
let winScore =  5; 
let p1score = 0;
let p2score = 0;
let gameOver = false;

p1button.addEventListener('click', function(){
  if(!gameOver){
  p1score++;
  if(p1score === winScore){
    p1display.classList.add('winner');
    gameOver = true;
    console.log('Game Over');	  
  }
  p1display.textContent = p1score;
}

});

p2button.addEventListener('click', function(){

  if(!gameOver){
  p2score++;
  if(p2score === winScore){
    gameOver = true;
    p2display.classList.add('winner');
    gameOver = true;
    console.log('Game Over');	  
  }
  p2display.textContent = p2score;
  }
})

resetButton.addEventListener('click', function(){
reset();
});

function reset(){
p1score = 0;
p2score = 0;
p1display.textContent = 0;
p2display.textContent = 0;
p2display.classList.remove('winner');
p1display.classList.remove('winner');
gameOver = false;

}
numInput.addEventListener('change', function(){
	spanDisplay.textContent = this.value;
	winScore = Number(this.value);	
	reset();
});
