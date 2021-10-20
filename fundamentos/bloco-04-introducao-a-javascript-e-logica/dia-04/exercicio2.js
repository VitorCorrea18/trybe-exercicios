//  Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(entry) {
    let splited = entry.split('');
    let reversed = splited.reverse();
    reversed = reversed.join('');
    if (reversed === entry) {
        console.log(true);
    } else {
        console.log(false)
    }   
}

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor dentro do array.

function indiceMaiorValor(entry) {
    let indiceM = 0
    for (let i in entry) {
        if (entry[i] > entry[indiceM]) {
            indiceM = i;
        }
    } console.log(indiceM);
}

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indiceMenorValor(entry) {
    let indiceM = 0
    for (let i in entry) {
        if (entry[i] < entry[indiceM]) {
            indiceM = i;
        }
    } console.log(indiceM);
}

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome(entry) {
    let mNome = 0;
    for (let i in entry) {
        if (entry[i].length > entry[mNome].length) {
            mNome = i
        }
    } console.log(entry[mNome]);
}

//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.


