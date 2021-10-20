let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for (let value in names) {
      console.log('Olá ' + names[value]);
  }
console.log('---------------------');

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let i in car) {
      console.log(i, car[i]);
  }
  