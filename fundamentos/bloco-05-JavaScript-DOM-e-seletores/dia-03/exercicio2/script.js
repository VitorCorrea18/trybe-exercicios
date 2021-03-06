function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfTheMonth() {
      const ulDays = document.querySelector('#days');
      for (let day of dezDaysList) {
          let li = document.createElement('li');
          li.innerHTML = day;
          li.className = 'day';
          ulDays.appendChild(li);
          if (day === 24 || day === 25 || day === 31) {
            li.classList.add('holiday');
          } else if (day === 4 || day === 11 || day === 18 || day === 25) {
              li.classList.add('friday');
          }
      } 
  }createDaysOfTheMonth();

  function createBtn(btnName, btnId) {
      const btnContainer = document.querySelector('.buttons-container');
      const btn = document.createElement('button');
      btn.id = btnId;
      btn.innerHTML = btnName;
      btnContainer.appendChild(btn);
  } createBtn('Feriados', 'btn-holiday'); createBtn('Sexta-feira', 'btn-friday');

const btnHoliday = document.querySelector('#btn-holiday');

btnHoliday.addEventListener('click', function() {
    let holidays = document.getElementsByClassName('holiday');
    for (let day of holidays) {
        if (day.style.backgroundColor === 'blue') {
            day.style.backgroundColor = 'rgb(238,238,238)'; 
        } else {
            day.style.backgroundColor = 'blue';
        }   
    }  
})


const btnFriday = document.getElementById('#btn-friday');

btnFriday.addEventListener('click', function() {
    let fridays = document.getElementsByClassName('friday');
    for (let day of fridays) {
        if (day.style.backgroundColor === 'red') {
            day.style.backgroundColor = 'rgb(238,238,238)'; 
        } else {
            day.style.backgroundColor = 'red';
        }   
    } 
})
