let globalDate;
let isValid = false;


function isValidDate(date) {
    globalDate = date
    let day = date.substring(0, 2);
    let month = date.substring(3, 5);
    let year = date.substring(6);
    var monthDot = date.charAt(2);
    var yearDot = date.charAt(5);
    var isItLeapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
   
   
    isValid = isLenghtValid(date);
    isValid = isDotValid(monthDot, yearDot); 
    isValid = isYearValid(year);    
    //isValid = is30Valid(month, day);
    isValid = isDayValid(day);
    isValid = isMonthValid(month);
    //isValid = is31Valid(month, day);
   // isValid = isLeapYearValid(month, day, isItLeapYear);
    isValid = isTotallyValidDate(month, day, isItLeapYear);
    return isValid;
  };
    function isLenghtValid(date) {
    return (date.length == 10) ? true : false;
  };
    function isDotValid(monthDot, yearDot) {
    return monthDot == "." && yearDot == "." ? true : false;
  };
    function isYearValid(year) {
    let intYear = parseInt(year);
    if(intYear >= 0 && intYear <= 9999){
    return true; }
    else {return false;}
  };
    function is30Valid(month, day) {
    let intDay = parseInt(day)
    let intMonth = parseInt(month)
    if (intMonth != 2 && intDay <= 30) {
    return true;}
    else {return false;}
  };
    function isDayValid(day) {
    let intDay = parseInt(day)
    return (intDay >= 0 && intDay <=28) ? true : false;
  };
    function isMonthValid(month) {
    let intMonth = parseInt(month)
    return (intMonth >= 0 && intMonth <= 12) ? true : false;
  };
    function is31Valid(month, day) {
    let intMonth = parseInt(month)
    let intDay = parseInt(day)
    return (intMonth == 1 || intMonth == 3 || intMonth == 5 || intMonth == 7 ||
      intMonth == 8 || intMonth == 10 || intMonth == 12 && intDay <= 31) ? true : false;
  };
    function isLeapYearValid(month, day, isItLeapYear) {
    return (parseInt(month) == 2 && parseInt(day) == 29 && isItLeapYear == true ) ? true : false;
  };

  function isTotallyValidDate(month, day, isItLeapYear){
    if(is30Valid(month, day) == true  ||  is31Valid(month, day)== true  || isLeapYearValid(month, day, isItLeapYear)){
      return true;
    }
    else{
      return false;
    }
  }