
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



const template = document.querySelector('.task_template');
const fragment = document.createDocumentFragment();
      mainWrapper = document.querySelector('.main_wrapper');

function createTask() {
    fragment.appendChild(template.content.cloneNode(true));
    mainWrapper.appendChild(fragment);
}

function taskActive() {
    document.querySelector('.task_nonactive').style.color = "#fff";
    document.querySelector('.task-checkbox').style.border = "1px solid #fff";
    document.querySelector('input').style.color = "#fff";
    document.querySelector('input').placeholder = ' ';
}

let inpt = [document.querySelectorAll('input')];
function check(Element) {
    if (Element.style.color == 'transparent')  {
        Element.style.color = '#fff';
    } else {
        Element.style.color = 'transparent';
    }
}


