//Variaveis

let li = document.getElementById ('li');
let input = document.querySelector(`input[type='text']`)
let ul = document.getElementById('ul');

//Completa  a tarefa ao clicar

    // li.addEventListener('click', (e) => {
    //     let val = e.tTagNamearget;
    //     if(val.tagName.toUpperCase() == 'LI'){
    //       val.classList.toggle('completed');
    //     }
    //     //e.classList.toggle('completed');
    //
    // })

let val = 'incompleto';

// Complete item and delete
function completeItem(){
  ul.addEventListener("click",(e)=> {
    let tgt = e.target;
    if (tgt.tagName.toUpperCase() == "LI" && val == 'incompleto') {
      tgt.classList.toggle('completed');
      val = 'completo';
    }else {
      removeAnimation(tgt);
      val= 'incompleto';
    }

  });

}
// tentativa de criar efeito de fadeOut
function removeItem(element) {
    element.remove();
}
function removeAnimation(element) {
  element.classList.add('fade-out');
  
  // setInterval(removeItem(element));
}



input.addEventListener('keypress',(e)=>{
    console.log(e);
    if(e.key === "Enter"){
        let text = input.value;
        input.value = '';
        let li = document.createElement('li');
        ul.appendChild(li);
        li.append(`${text}`);
    }
})

completeItem();
