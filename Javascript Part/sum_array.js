var numeros = [1, 2, 3, 4, 5];

/* var total = numeros[0] + numeros[1];
console.log(total); */

function sumArray(params) {
    var total = 0;
    params.forEach(element => {
        total += element;
    });
    console.log(total);
}
sumArray(numeros);