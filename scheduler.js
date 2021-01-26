
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function findTitle(){
  let day = new Date();
  let currentTitle = document.querySelector('#title');

  console.log(currentTitle);
  currentTitle.innerHTML = months[day.getMonth()] + ' ' +  day.getFullYear() + ': ';
}

function createDay() {
  let dateNumber = document.querySelectorAll('.day')
  let date = new Date();
  let firstDay = new Date(date.getFullYear(),0,1);
  console.log(firstDay);
  console.log(date.getMonth())
  for(let i = 0; i < daysInMonth(1,2021);i++){
    dateNumber[firstDay.getDay()+i].innerHTML = i+1;
  }
}

function daysInMonth(month,year){
  return new Date(year,month,0).getDate();
}

function taskDone(el){
  if(el.style.backgroundColor == 'green'){
    el.style.backgroundColor = 'white';
  }else{
  el.style.backgroundColor = 'green';
  }
  console.log('change');
};

createDay();
findTitle();
