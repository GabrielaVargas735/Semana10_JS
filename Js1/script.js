//Ejercicio 1:
//Escriba una función llamada max que tome como argumento dos números y retorne el mayor
//de ellos. Escriba un pequeño programa interactivo que permita evaluar el funcionamiento de
//la función. 

function max(a, b){
    return a > b;
}

const valor1 = 950;
const valor2 = 1000;
const resultado = max(valor1, valor2);

if(valor1 > valor2){
    console.log(`Es mayor ${valor1} que el número: ${valor2}`);
} else{
    console.log(`Es mayor ${valor2} que el número ${valor1}`);
}
