//Ejercicio 4 (extra):
//Escriba una función llamada alinearDerecha que tome como argumento dos números
//enteros. La función imprimirá el primer número alineado a la derecha en una columna cuya
//cantidad de caracteres esté dada por el segundo número.

let arreglo = [56, 1245, 67, 6, 344535, 3556, 32, 237];

function alinearDerecha(num, arg){
    let numero = String(num).length;
    let resultado = arg - numero;
    let vacio = '_';
    for (let contador = 0; contador < resultado; contador++){
        vacio += '_';
    }
    let final = vacio + num;
    return final;
}
for(let i = 0; i < arreglo.length; i++){
    console.log(alinearDerecha(arreglo[i], 7));
}
