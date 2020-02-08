// VARIAVEIS E ELEMENTOS
let numSqs = 6;
let colors = generateRandomColor(numSqs);
const quadrados = document.querySelectorAll('.square'); // seleciona os quadrados
let corEscolhida = pickColor(); // seleciona a cor a ser acertada
let corEscolhidaDisplay = document.getElementById('colorDisplay') //seleciona o span do titulo h1
corEscolhidaDisplay.textContent = corEscolhida; // muda o text e adiciona o numero de rgb
let messageDisplay = document.querySelector('#message')
let h1 = document.querySelector('h1');
let resetBtn = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');
var reseteButton = document.querySelector('#reset')

easyBtn.addEventListener('click', function(){
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    numSqs = 3;
    colors = generateRandomColor(numSqs);
    corEscolhida = pickColor();
    corEscolhidaDisplay.textContent = corEscolhida;
    for(let i =0; i < quadrados.length; i++){
        if(colors[i]){
            quadrados[i].style.background = colors[i];
        }else{
            quadrados[i].style.display = 'none';
        }
    }
})


hardBtn.addEventListener('click', function(){
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    numSqs = 6;
    colors = generateRandomColor(numSqs);
    corEscolhida = pickColor();
    corEscolhidaDisplay.textContent = corEscolhida;
    for(let i =0; i < quadrados.length; i++){
        quadrados[i].style.background = colors[i];
        quadrados[i].style.display = 'block';
        }
    }
    
)

resetBtn.addEventListener('click', function () {
    colors = generateRandomColor(numSqs);
    corEscolhida = pickColor(); // seleciona a cor a ser acertada
    corEscolhidaDisplay.textContent = corEscolhida;
    messageDisplay.textContent= '';
    this.textContent = 'Novas Cores';
    if (resetBtn.textContent = 'Jogar Novamente') {
        resetBtn.textContent = 'Novas Cores';
    }
    for (let i = 0; i < quadrados.length; i++) { //roda os valores em loop em cada quadrado
        /// adiciona as cores iniciais
        quadrados[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = 'steelblue';
});

for (let i = 0; i < quadrados.length; i++) { //roda os valores em loop em cada quadrado
    /// adiciona as cores iniciais
    quadrados[i].style.backgroundColor = colors[i];

    // adiciona eventos ao clicar os quadrados
    quadrados[i].addEventListener('click', function () {
        //pega cor do quadrado clicado
        let corClicada = this.style.backgroundColor
        if (corClicada === corEscolhida) { // se corEscolhida é igual corClicada joga statement
            messageDisplay.textContent = 'Correto!';
            mudarCor(corClicada);
            resetBtn.textContent = 'Jogar Novamente';
            h1.style.backgroundColor = corClicada;
        } else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = "Tente novamente!";
        }
    });
}

function mudarCor(cor) {
    // passar loop em cada quadrado e mudar as cores 
    //para a cor correta
    for (let i = 0; i < quadrados.length; i++) {
        quadrados[i].style.backgroundColor = cor;
    }
}

function pickColor() {
    // gera um numero randomico do array de cores e retorna
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num) { // gera um numero de cores num array
    let arr = []; //inicia array
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() { // retorna os valores em rgb
    let r = colorNumber();
    let g = colorNumber();
    let b = colorNumber();
    return `rgb(${r}, ${g}, ${b})`;
}

function colorNumber() { // criar cada numero randomico de 0 a 255
    let number = Math.floor(Math.random() * 256);
    return number;
}