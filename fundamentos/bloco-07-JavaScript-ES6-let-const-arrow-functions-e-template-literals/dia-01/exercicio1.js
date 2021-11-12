const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (oddsAndEvens) => {
    let odds = [];
    let evens = [];
    let sortedOddsEvens = oddsAndEvens.sort((a,b) => a - b);
    for (let i = 0; i < sortedOddsEvens.length; i +=1) {
        sortedOddsEvens[i] % 2 ? evens.push(sortedOddsEvens[i]) : odds.push(sortedOddsEvens[i])
    }
    console.log(`${odds} oddsAndEvens ${evens}`);
}

sortOddsAndEvens(oddsAndEvens);

// console.log(oddsAndEvens); // será necessário alterar essa linha 😉
/* console.log(<seu código>oddsAndEvens<seu código>) */