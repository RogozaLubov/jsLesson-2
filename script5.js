let day = parseInt(prompt("Введите число"));
let month =parseInt(prompt("Введите месяц"));
let year =parseInt(prompt("Введите год"));

let dayInMonth =0;
let monthYear = null;

let leapYear4 = year%4 ;
let notLeapYear = year%100;
let leapYear400  = notLeapYear%400;
let years = (leapYear4 ===0 && notLeapYear !==0)|| leapYear400 ===0;



if (month == 1) {
    monthYear ="January"
    dayInMonth = 31;
}else if (month ==2 ) {
    monthYear = "February"
    dayInMonth = years ==true ? 29:28 ;
    
}else if (month ==3 ) {
    monthYear = "March"
    dayInMonth =31;
}else if (month ==4 ) {
    monthYear = "April"
    dayInMonth =30;
}else if (month ==5 ) {
    monthYear = "May"
    dayInMonth =31;
}else if (month ==6 ) {
    monthYear = "June"
    dayInMonth =30;
}else if (month ==7 ) {
    monthYear = "July"
    dayInMonth =31;
}else if (month ==8 ) {
    monthYear = "August"
    dayInMonth =31;
}else if (month ==9 ) {
    monthYear = "September"
    dayInMonth =30;
}else if (month ==10 ) {
    monthYear = "October"
    dayInMonth =31;
}else if (month ==11 ) {
    monthYear = "November"
    dayInMonth =30;
}else if (month ==12 ) {
    monthYear = "December"
    dayInMonth =31;
}

if (monthYear !=null && day>0 && day <=dayInMonth) {
    alert (day + "" + monthYear + "" + year)
} else{
    alert("Invalide data");
}
 