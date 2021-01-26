
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

//Changes the title to the current month
function findTitle(){
  let day = new Date();
  let currentTitle = document.querySelector('#title');

  console.log(currentTitle);
  currentTitle.innerHTML = months[day.getMonth()] + ' ' +  day.getFullYear() + ': ';
}

//Places the day number in the calendar
function createDay(x) {
  let dateNumber = document.querySelectorAll('.day')
  let date = new Date();
  let firstDay = new Date(date.getFullYear(),x,1);
  console.log(x);
  console.log(date.getMonth())
  console.log(daysInMonth(x,2021))
  for(let i = 0; i < daysInMonth(x,2021);i++){
    dateNumber[firstDay.getDay()+i].innerHTML = i+1;
  }
}

//Finds the days in that specific month
function daysInMonth(month,year){
  return new Date(year,month,0).getDate();
}

//Changes day color when task is complete i.e clicked on
function taskDone(el){
  if(el.innerHTML == ''){
    return;
  }
  if(el.style.backgroundColor == 'green'){
    el.style.backgroundColor = 'white';
  }else{
  el.style.backgroundColor = 'green';
  }
  console.log('change');
};

function findMonth(){
  let date = new Date()
  console.log(date.getMonth())
  return date.getMonth();
}

function nextMonth(){
  clearCalendar();
  let currentMonth = findMonth();
  nextMonth = currentMonth + 2;
  console.log(nextMonth);
  createDay(nextMonth);
  return;
}

function clearCalendar(){
    let dateNumber = document.querySelectorAll('.day');
    for(let i = 0; i < 42; i++){
      dateNumber[i].innerHTML = '';
    }
    return;
}

createDay(findMonth());
findTitle();
