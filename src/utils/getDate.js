export function getDate(type, format, date) {
  // Create a new Date object
  var selectedDate;
  if (date) {
    selectedDate = new Date(date);
  } else {
    selectedDate = new Date();
  }

  // Switch based on the value parameter
  switch (type) {
    case "year":
      return selectedDate.getFullYear();
    case "month":
      return format === "short"
        ? selectedDate.getMonth() + 1
        : selectedDate.toLocaleString("default", { month: format });
    case "day":
      return selectedDate.getDate();
    case "hour":
      return selectedDate.getHours();
    case "minute":
      return selectedDate.getMinutes();
    case "second":
      return selectedDate.getSeconds();
    case "millisecond":
      return selectedDate.getMilliseconds();
    case "timestamp":
      return selectedDate.getTime();
    case "date":
      return format !== "short"
        ? formatDate(selectedDate, true)
        : formatDate(selectedDate);

    default:
      return selectedDate.toLocaleString("en");
  }
}
function formatDate(date, intl) {
  // Array of month names
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Array of weekday names
  var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get the day, month, year, and weekday
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  var weekday = date.getDay();

  const passedTime = timePassedFromNow(date);

  var formattedDate = day + " " + months[month] + " " + year;

  var IntlDate =
    weekdays[weekday] + ", " + day + " " + months[month] + " " + year;

  switch (true) {
    case passedTime.days >= 4:
      return formattedDate;
    case passedTime.days >= 1:
      return passedTime.days + " day ago";
    case intl:
      return IntlDate;
    default:
      return passedTime.hours + " hours ago";
  }
}

function timePassedFromNow(previousDate) {
  // Parse the previous date string into a Date object
  var prevDate = new Date(previousDate);

  // Get the current date and time
  var currentDate = new Date();

  // Calculate the difference in milliseconds
  var timeDifference = currentDate.getTime() - prevDate.getTime();

  // Convert milliseconds to seconds
  var seconds = Math.floor(timeDifference / 1000);

  // Convert seconds to minutes
  var minutes = Math.floor(seconds / 60);

  // Convert minutes to hours
  var hours = Math.floor(minutes / 60);

  // Convert hours to days
  var days = Math.floor(hours / 24);

  // Convert days to weeks
  var weeks = Math.floor(days / 7);

  // Return an object containing the time passed in weeks, days, hours, minutes, and seconds
  return {
    weeks: weeks,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

// console.log(getDate("timestamp", null, "2022/10/12"));
// console.log(getDate("date", "long", "1994/02/01"));
// console.log(getDate("date", "short", "2024/02/09"));
