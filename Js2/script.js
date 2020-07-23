//Ejercicio 2:
//Modifique el ejercicio 2 de la Práctica 2 para que utilice una función que reciba como
//argumento dos números enteros y retorne verdadero en caso de que el primer número sea
//divisible entre el segundo y falso en caso contrario.

function numero(a, b){
    return a / b;
}

const valor1 = 15;
const valor2 = 7;
const division = numero(valor1, valor2);
console.log('El resultado de la división es de:', division);

if(valor1 % valor2 == 0 && valor2 % valor1 != 0){
    console.log('Verdadero');
} else {
    console.log('Falso');
}