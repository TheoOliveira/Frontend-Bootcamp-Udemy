//Variaveis

let completeBtn = document.querySelectorAll('li');
let deleteBtn = document.querySelectorAll('span');
let input = document.querySelector(`input[type='text']`)
let ul = document.querySelector('ul');

//Completa  a tarefa ao clicar

for (let el of completeBtn) {
    el.addEventListener('click', () => {
        el.classList.toggle('completed');
    })
}

//  Deleta o item

for(let el of deleteBtn){
    el.addEventListener("click", (event)=>{
        el.parentNode.remove(); //criar animação no js de fadeout com função
        event.stopPropagation();
    })
}

/* function removeElement(element) {
    // Removes an element from the document
    let elementName = document.getElementsByClassName(element);
    elementName.parentNode.removeChild(element);
} */


// Adiciona input com enter

input.addEventListener('keypress',(e)=>{
    if(e.which === 13){
        let text = input.value;
        input.value = '';
        let li = document.createElement('li');
        let span = document.createElement('span');
        li.appendChild(span);
        ul.appendChild(li);
        li.append(`${text}`);
        span.append('X ');
    }
})