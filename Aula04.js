// Yaakov Meir Sabbah 2214290075
//1
function ordenarArray(arr) {
    if (arr[0] > arr[1]) {
        let temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
    }
    return arr;
}

// Exemplo de uso:
let array1 = [5, 2];
console.log(ordenarArray(array1)); // Saída: [2, 5]

//2
function ordenarArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Exemplo de uso:
let array2 = [5, 2, 9];
console.log(ordenarArray(array2)); // Saída: [2, 5, 9]

//3
let numeros = [];

for (let i = 0; i < 3; i++) {
    numeros.push(parseInt(prompt("Digite um número:")));
}

console.log("Array original:", numeros);

numeros.reverse();

console.log("Array modificado:", numeros);

//4
let quantidade = parseInt(prompt("Digite a quantidade de números:"));
let numeros = [];

for (let i = 0; i < quantidade; i++) {
    numeros.push(parseInt(prompt("Digite um número:")));
}

console.log("Array original:", numeros);

let numerosInvertidos = numeros.slice().reverse();

console.log("Array invertido:", numerosInvertidos);

//5
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Exemplo de uso:
let array = [5, 2, 9, 1, 6];
console.log(bubbleSort(array)); // Saída: [1, 2, 5, 6, 9]

//6
function encontrarIndices(arr, num) {
    let indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            indices.push(i);
        }
    }
    return indices;
}

// Exemplo de uso:
let vetor = [1, 2, 3, 4, 2, 5, 2];
console.log(encontrarIndices(vetor, 2)); // Saída: [1, 4, 6]

//7
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

let n = parseInt(prompt("Digite um inteiro positivo:"));
console.log(fibonacci(n));

//8
function fatorial(n) {
    let fat = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            fat[i] = '0! = ';
        } else if (i === 1) {
            fat[i] = '1 x ' + fat[i - 1] + '1 = 1';
        } else {
            fat[i] = i + ' x ' + fat[i - 1] + i + ' = ' + (i * eval(fat[i - 1].split('=')[1].trim()));
        }
    }
    return fat;
}

let n = parseInt(prompt("Digite um inteiro positivo:"));
console.log(fatorial(n));

//9