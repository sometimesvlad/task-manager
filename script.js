

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
var timeHours = new Date();
timeMinutes = new Date();
hoursBlock.innerHTML = timeHours.getHours() + ':';
minutesBlock.innerHTML = timeMinutes.getMinutes();
// время



var wrapper = document.querySelector('.wrapper');
   

function createTask(e) {
    var fragment = document.createDocumentFragment();
        template = document.querySelector('.template');
    if (e.keyCode == 13) {
       fragment.appendChild(template.content.cloneNode(true));
       wrapper.appendChild(fragment);
    }
}

// var elems = document.getElementsByClassName('checkbox_container');
// function check() {
//     Array.from(elems).forEach(v => v.addEventListener('change', function(){
//       this.lastElementChild.classList.toggle('checked');
//     }));
// }

// попробовать сделать через вайл

function change(element) {
    element.parentNode.classList.toggle("checked");
}

var elt = document.querySelector('.remove');

function remove(element) {
    element.closest('.task').remove();
}

