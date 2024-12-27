export function format(date, pattern = "YYYY-MM-DD") {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const parts = formatter.formatToParts(date);

  const map = {};
  parts.forEach((part) => {
    map[part.type] = part.value;
  });

  return pattern
    .replace("YYYY", map.year)
    .replace("MM", map.month)
    .replace("DD", map.day)
    .replace("HH", map.hour)
    .replace("mm", map.minute)
    .replace("ss", map.second);
}
