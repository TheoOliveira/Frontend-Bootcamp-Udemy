//Variaveis

let completeBtn = document.getElementById('li');
let input = document.querySelector(`input[type='text']`)
let ul = document.getElementById('ul');

//Completa  a tarefa ao clicar

    // li.addEventListener('click', (e) => {
    //     let val = e.target;
    //     if(val.tagName.toUpperCase() == 'LI'){
    //       val.classList.toggle('completed');
    //     }
    //     //e.classList.toggle('completed');
    //
    // })


//  Deleta o item
/* function deleteTask(){
for(let el of deleteBtn){
    el.addEventListener("click", (event)=>{
        el.parentNode.remove(); //criar animação no js de fadeout com função
        event.stopPropagation();
    })
}
} */
// novo metodo para deletar
ul.addEventListener("click",(e)=> {
    let tgt = e.target;
    if (tgt.tagName.toUpperCase() == "LI") {
      tgt.parentNode.removeChild(tgt);
    }
  });


// Adiciona input com enter

input.addEventListener('keypress',(e)=>{
    console.log(e);
    if(e.key === "Enter"){
        let text = input.value;
        input.value = '';
        let li = document.createElement('li');
        let span = document.createElement('span');
        ul.appendChild(li);

        li.append(`${text}`);
    }
})

/* deleteTask(); */
