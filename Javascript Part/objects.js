// nao da pra usar dot notation com keys que começem com numeros

someObject.1blash // invalido
someObject["1blash"] // valido

// da pra usar com bracket usando uma variavel
var str = "name";

someObject.str // nao acha "name"
someObject[str] // acha "name

// usamos isso para dar update em props de objects"