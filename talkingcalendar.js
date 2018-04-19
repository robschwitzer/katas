var talkingCalendar = function(date) {
  var year = date.slice(0,4);
  var monthInEnglish = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var monthNumber = date.slice(5,7);
  var month;
  var day = date.slice(8,10);

  if (day <= '09') {
    day = date.slice(9,10);
    if (day === '1') {
      day += 'st';
    } else if (day === '2') {
      day += 'nd';
    } else if (day === '3') {
      day += 'rd';
    } else {
      day += 'th';
    }
  }  else if (day === '01' || day === '21' || day === '31') {
    day += 'st';
  } else if (day === '02' || day === '22') {
    day += 'nd';
  } else if (day === '03' || day === '23') {
    day += 'rd';
  } else {
    day += 'th';
  }

  if (monthNumber === '01') {
    month = monthInEnglish[0];
  } else if (monthNumber === '02') {
    month = monthInEnglish[1];
  } else if (monthNumber === '03') {
    month = monthInEnglish[2];
  } else if (monthNumber === '04') {
    month = monthInEnglish[3];
  } else if (monthNumber === '05') {
    month = monthInEnglish[4];
  } else if (monthNumber === '06') {
    month = monthInEnglish[5];
  } else if (monthNumber === '07') {
    month = monthInEnglish[6];
  } else if (monthNumber === '08') {
    month = monthInEnglish[7];
  } else if (monthNumber === '09') {
    month = monthInEnglish[8];
  } else if (monthNumber === '10') {
    month = monthInEnglish[09];
  } else if (monthNumber === '11') {
    month = monthInEnglish[10];
  } else if (monthNumber === '12') {
    month = monthInEnglish[11];
  }
  return `${month} ${day}, ${year}`
}

console.log(talkingCalendar("2017/10/02"));  //December 2nd, 2017
console.log(talkingCalendar("2007/10/10"));  //November 11th, 2007
console.log(talkingCalendar("1987/08/24"));  //August 24th, 1987