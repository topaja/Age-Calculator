const calculateAge = () => {
  let year;
  let month;
  let day;
  let currentDay = parseInt(cd.value.slice(8, 10), 10);
  let currentMonth = parseInt(cd.value.slice(5, 7), 10);
  let currentYear = parseInt(cd.value.slice(0, 4), 10);
  console.log("current date :- ", currentYear, currentMonth, currentDay);

  let birthYear = parseInt(bd.value.slice(0, 4), 10);
  let birthMonth = parseInt(bd.value.slice(5, 7), 10);
  let birthDay = parseInt(bd.value.slice(8, 10), 10);
  console.log("birth date :- ", birthYear, birthMonth, birthDay);

  if (currentDay >= birthDay) {
    day = currentDay - birthDay;
  } else {
    //   03-1 - this will target feb 
    //   03-1 , 0 - refer to the last date of that month(feb)
    let daysInPreviousMonth = new Date(currentYear,currentMonth - 1,0).getDate();
    day = daysInPreviousMonth - birthDay + currentDay;
    currentMonth--;
  }
  if (currentMonth >= birthMonth) {
    month = currentMonth - birthMonth;
  } else {
    month = currentMonth + 12 - birthMonth;
    currentYear--;
  }
  year = currentYear - birthYear;

  if (year < 0) {
    display.innerHTML = "Not Born Yet";
  } else {
    display.innerHTML = year + " year  " + month + " month  " + day + " days";
  }
};
