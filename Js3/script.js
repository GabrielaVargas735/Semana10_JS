//Ejercicio 3:
//Modifique el ejercicio 6 de la práctica de repaso para que utilice una función llamada esPrimo
//que tome como argumento un número entero y retorne true si el número es primo y falso en
//caso contrario.

function esPrimo(a, b){
    return a % b
}
const valor1 = 853;
const valor2 = 8;
const resultado = esPrimo(valor1, valor2);
console.log(`El módulo de ${valor1} con el ${valor2} es de:`, resultado);

if (valor1 % 0|| valor1 % 4 || valor1 % 1 ){
    console.log(`El número ${valor1} es primo`);
} else {
    console.log(`El número ${valor1} es compuesto`);
}

if (valor2 % 0 || valor2 % 4 || valor2 % 1 ){
    console.log(`El número ${valor2} es primo`);
} else {
    console.log(`El número ${valor2} es compuesto`);
}
