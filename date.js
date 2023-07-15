const today = document.querySelector(".Today")
const DayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

function getToday(){
    const date = new Date();
    const Year = date.getFullYear();
    const Month = String(date.getMonth()+1).padStart(2,"0");
    const date2 = String(date.getDate()).padStart(2,"0");
    const Day = date.getDay();
    today.innerText = `${Year} . ${Month} . ${date2} . ${DayName[Day]}`;
}

getToday();