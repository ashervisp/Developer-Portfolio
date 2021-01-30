
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let firstMonth = findMonth();
let monthCounter = firstMonth;
let greenDays = []
let checkMonth = 0
let day = new Date();
let currYear = day.getFullYear()
let storeTitle= ''
let dateData = {};
//Changes the title to the current month
function findTitle(month){
  let currentTitle = document.querySelector('#title');
  console.log(checkMonth)
  console.log(month)
  if(checkMonth == 11 && month == 0){
    currYear = currYear + 1;
    checkMonth = 0;
  } else if (checkMonth == 0 && month == 11){
    currYear = currYear - 1;
    checkMonth = 11;
  }
  else{
  checkMonth = month;
  }
  storeTitle = months[month] + currYear;
  currentTitle.innerHTML = months[month] + ' ' +  currYear + ': ';
}
//Places the day number in the calendar
function createDay(x) {
  let dateNumber = document.querySelectorAll('.day')
  let date = new Date();
  let firstDay = new Date(date.getFullYear(),x,1);
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
}

function findMonth(){
  let date = new Date()
  return date.getMonth();
}

function storeDoneTasks(month){
  let dateNumber = document.querySelectorAll('.day');
  let currMonthYear = months[month] + currYear.toString();


  for(let i = 0;i  < 42; i++){
    if(dateNumber[i].style.backgroundColor == 'green'){
      greenDays.push(1);
    }else
      greenDays.push(0);
  }

  dateData[currMonthYear] = greenDays;
  greenDays= [];
}

function showDoneTasks(){
  let savedDays = document.querySelectorAll('.day')
  for(let k in dateData){
    console.log(k)
    console.log(storeTitle)
    console.log(dateData)
    if( k == storeTitle){
      for(let m = 0; m < 42; m++){
        if(dateData[k][m] == 1){
          savedDays[m].style.backgroundColor = 'green';
        }
      }
      break;
    }
  }
}

//Changes the month dates
function nextMonth(){
  storeDoneTasks(monthCounter);
  clearCalendar();
  monthCounter++;
  createDay(monthCounter)
  if(monthCounter > 11){
    monthCounter = 0;
  }
  findTitle(monthCounter)
  showDoneTasks();
  return;
}

function prevMonth(){
  storeDoneTasks(monthCounter);
  clearCalendar();
  monthCounter--;
  createDay(monthCounter);
  if(monthCounter < 0){
    monthCounter = 11
  }
  findTitle(monthCounter);
  showDoneTasks();
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
