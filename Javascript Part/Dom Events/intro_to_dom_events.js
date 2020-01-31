const elemento = document.querySelector('button');
const h1 = document.querySelector('h1');
const lis = document.querySelectorAll('li');


// botao
elemento.addEventListener('click', () => {
    elemento.textContent = "Voce clicou!";
});

// h1
h1.addEventListener('click', () => {
    h1.style.background = "orange";
})


// li

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', () => {
        lis[i].style.color = "pink";
    });
}