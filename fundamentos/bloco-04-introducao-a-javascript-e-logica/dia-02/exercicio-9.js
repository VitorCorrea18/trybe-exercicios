//Utilizando o array criado no exercício anterior 
//imprima o resultado da divisão de cada um dos elementos por 2 .


let num = [];

for (i=1; i<=25; i++) {
    num.push(i);
}

let divisao = [];

for (i=0; i<num.length; i++) {
    divisao.push(num[i] / 2);
}

console.log(divisao);