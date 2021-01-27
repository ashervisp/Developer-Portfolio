
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

//Changes the title to the current month
function findTitle(month){
  let day = new Date();
  let currentTitle = document.querySelector('#title');

  console.log(currentTitle);
  currentTitle.innerHTML = months[month] + ' ' +  day.getFullYear() + ': ';
}

//Places the day number in the calendar
function createDay(x) {
  let dateNumber = document.querySelectorAll('.day')
  let date = new Date();
  let firstDay = new Date(date.getFullYear(),x,1);
  console.log(x);
  console.log(date.getMonth())
  console.log(daysInMonth(x+1,2021))
  for(let i = 0; i < daysInMonth(x+1,2021);i++){
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

let greenDays = []

function storeDoneTasks(){
  let dateNumber = document.querySelectorAll('.day');

  for(let i = 0;i  < 42; i++){
    if(dateNumber[i].style.backgroundColor == 'green'){
      greenDays.push(1);
    }else greenDays.push(0);
  }

  console.log(greenDays)
}

let firstMonth = findMonth();
let monthCounter = firstMonth;

//Changes the month dates
function nextMonth(){
  storeDoneTasks();
  clearCalendar();
  monthCounter++;
  console.log(monthCounter);
  createDay(monthCounter)
  if(monthCounter > 11){
    monthCounter = 0;
  }
  findTitle(monthCounter)

  return;
}

function prevMonth(){
  clearCalendar();
  monthCounter--;
  createDay(monthCounter);
  if(monthCounter < 0){
    monthCounter = 11
  }
  findTitle(monthCounter);
  return;
}

function clearCalendar(){
    let dateNumber = document.querySelectorAll('.day');
    for(let i = 0; i < 42; i++){
      dateNumber[i].innerHTML = '';
      dateNumber[i].style.backgroundColor = 'white';
    }
    let nextTitle = document.querySelector('#title');
    nextTitle.innerHTML = '';
    return;
}



createDay(findMonth());
findTitle(findMonth());
