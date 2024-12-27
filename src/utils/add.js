export function add(date, amount, unit) {
  const newDate = new Date(date);
  switch (unit) {
    case "days":
      newDate.setDate(newDate.getDate() + amount);
      break;
    case "months":
      newDate.setMonth(newDate.getMonth() + amount);
      break;
    case "years":
      newDate.setFullYear(newDate.getFullYear() + amount);
      break;
    case "hours":
      newDate.setHours(newDate.getHours() + amount);
      break;
    case "minutes":
      newDate.setMinutes(newDate.getMinutes() + amount);
      break;
    case "seconds":
      newDate.setSeconds(newDate.getSeconds() + amount);
      break;
  }
  return newDate;
}

export function subtract(date, amount, unit) {
  return add(date, -amount, unit);
}
