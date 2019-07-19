

var dayBlock = document.querySelector('.day');
monthBlock = document.querySelector('.month_name');
dayNumberBlock = document.querySelector('.day_number');
hoursBlock = document.querySelector('.hours');
minutesBlock = document.querySelector('.minutes');


// день недели
var dayOfWeek = new Date();
weekDay = new Array(7);
weekDay[0] = 'SUNDAY';
weekDay[1] = 'MONDAY';
weekDay[2] = 'TUESDAY';
weekDay[3] = 'WEDNESDAY';
weekDay[4] = 'THUESDAY';
weekDay[5] = 'FRIDAY';
weekDay[6] = 'SATURDAY';
dayBlock.innerHTML = weekDay[dayOfWeek.getDay()];

//месяц
var month = new Date();
monthName = new Array(11);
monthName[0] = 'January';
monthName[1] = 'February';
monthName[2] = 'March';
monthName[3] = 'April';
monthName[4] = 'May';
monthName[5] = 'June';
monthName[6] = 'July';
monthName[7] = 'August';
monthName[8] = 'September';
monthName[9] = 'October';
monthName[10] = 'November';
monthName[11] = 'December';
monthBlock.innerHTML = monthName[month.getMonth()] + '&nbsp;';

//число
var dayNumber = new Date();
dayNumberBlock.innerHTML = dayNumber.getDate();

//время
function clock(){
    var date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('clock').innerHTML = hours + ':' + minutes ;
}
setInterval(clock, 1000);
clock();
// время



var wrapper = document.querySelector('.tasks_wrapper');
   

function createTask(e) {
    var fragment = document.createDocumentFragment();
        template = document.querySelector('.template');
    if (e.keyCode == 13) {
       fragment.appendChild(template.content.cloneNode(true));
       wrapper.appendChild(fragment);
    }
}

function addTask() {
    var fragment = document.createDocumentFragment();
        template = document.querySelector('.template');
        fragment.appendChild(template.content.cloneNode(true));
        wrapper.appendChild(fragment);
    }

function change(element) {
    element.parentNode.classList.toggle("checked");
}

var elt = document.querySelector('.remove');

function remove(element) {
    if (document.getElementsByClassName('task').length == 1){
        return;
    } else {
    element.closest('.task').remove(); 
    }
}



