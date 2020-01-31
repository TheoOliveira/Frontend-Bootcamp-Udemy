// VARIAVEIS E ELEMENTOS
const colors = generateRandomColor(6);
const quadrados = document.querySelectorAll('.square'); // seleciona os quadrados
let corEscolhida = pickColor(); // seleciona a cor a ser acertada
let corEscolhidaDisplay = document.getElementById('colorDisplay') //seleciona o span do titulo h1
corEscolhidaDisplay.textContent = corEscolhida; // muda o text e adiciona o numero de rgb
let messageDisplay = document.querySelector('#message')
let h1 = document.querySelector('h1');

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