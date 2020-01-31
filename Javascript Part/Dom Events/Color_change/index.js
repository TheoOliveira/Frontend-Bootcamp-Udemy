const botao = document.querySelector('button');
let isPurple = false;


//ONE WAY TO DO IT
//botao.addEventListener('click', function(){
//    if(isPurple){
//        document.body.style.backgroundColor = "white";
//        isPurple = false;
//    }else{
//        document.body.style.backgroundColor = "purple";
//        isPurple = true;
//    }
//})

// SHORTER WAY TO DO IT AND GOOD PRATICE DOING IT
botao.addEventListener('click', function(){
    document.body.classList.toggle('purple');
})