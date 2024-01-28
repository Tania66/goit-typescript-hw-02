/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayWeek {
  Monday,
  Tuesday,
  Wednesday ,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(days: DayWeek) : boolean{
switch (days) {
  case DayWeek.Saturday:
    case DayWeek.Sunday:
      return true;

  default:
    return false;
}
}

const monday = DayWeek.Monday;
const sunday = DayWeek.Sunday;
console.log(isWeekend(monday));
console.log(isWeekend(sunday)); 



