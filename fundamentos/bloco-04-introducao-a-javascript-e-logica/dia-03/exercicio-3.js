//Agora inverta o lado do triângulo.

let n = 5;
let symbol = '*';
let inputLine = '';
let symbolPosition = n;

for (let i = 0; i <= n; i += 1) {
    for (let k = 0; k <= n; k += 1) {
        if (k < symbolPosition) {
            inputLine = inputLine + ' ';
        } else {
            inputLine = inputLine + symbol;
        }
    }
    console.log(inputLine);
    inputLine = '';
    symbolPosition -= 1;
};