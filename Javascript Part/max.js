var numeros = [1, 2, 3];

function max(params) {
    var primeiro = params[0];

    for (let i = 0; i <= params.length - 1; i++) {
        if (params[i] > primeiro) {
            primeiro = params[i];
        }

    }
    console.log(primeiro);
}
max(numeros);
