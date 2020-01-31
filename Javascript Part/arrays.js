let colors=["red", "yellow", "blue"];

// push adiciona

colors.push("green");

//pop remove o ultimo

colors.pop();


// remove o primero elemento do array

colors.shift();


// adiciona ao prmieiro array

colors.unshift("blue");


// fala qual index o array está 


colors.indexOf("red");

// copy arrays from another array

let colors2 =colors.slice(0,1);

console.log(colors);
var col = colors.shift('blue');
console.log(col);