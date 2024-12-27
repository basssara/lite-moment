export function difference(date1, date2, unit = "milliseconds") {
  const diff = date1 - date2;
  switch (unit) {
    case "seconds":
      return diff / 1000;
    case "minutes":
      return diff / (1000 * 60);
    case "hours":
      return diff / (1000 * 60 * 60);
    case "days":
      return diff / (1000 * 60 * 60 * 24);
    default:
      return diff;
  }
}
