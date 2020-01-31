var todos = ["Buy new a Turtle"];

var input = prompt("What would you like to do?");



while(input !== "quit"){
    if(input === "list"){
        console.log("***********");
        listTodos();
    } else if(input === "new"){
        addTodo();
    } else if(input === "delete"){
        deleteTodo();
    }
    input = prompt("What would you like to do?");
}
console.log("ok, you quit");

function listTodos(){
    todos.forEach((todo, index) =>{
        console.log(`${index} : ${todo}`);
    });
    console.log("***********");

    console.log(todos);

}

function addTodo(){
    var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log("added task");  
}

function deleteTodo(){
    var index = prompt("Enter index to delete: ");
        todos.splice(index,1);
        console.log("Deleted task");
}