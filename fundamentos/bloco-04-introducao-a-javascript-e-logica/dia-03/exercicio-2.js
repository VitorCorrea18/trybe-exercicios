// Para o segundo exercício, faça o mesmo que antes, 
//mas que imprima um triângulo retângulo com 5 asteriscos de base.

let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
  console.log(inputLine);
};

