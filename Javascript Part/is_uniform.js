var numeros = [1, 2, 3, 4];
var numerosIguais = [1, 1, 1, 1];

/* function isUniform(params) {
    for (let i = 0; i < params.length - 1; i++) {
        if (params[i] == params[i + 1]) {
            console.log("True");
            return true;
        } else {
            console.log("False");
            return false;
        }

    }
} */
/* isUniform(numeros);
console.log('######') */
isUniform(numeros);


// another way of doing it

function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            console.log('false');
        }

    }
    console.log('true')
}