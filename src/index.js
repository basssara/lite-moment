import { parse, format, add, subtract, difference } from "./utils";

class LiteMoment {
  constructor(date = new Date()) {
    this.date = date instanceof Date ? date : new Date(date);
  }

  format(pattern) {
    return format(this.date, pattern);
  }

  add(amount, unit) {
    this.date = add(this.date, amount, unit);
    return this;
  }

  subtract(amount, unit) {
    this.date = subtract(this.date, amount, unit);
    return this;
  }

  difference(otherDate, unit) {
    return difference(this.date, new Date(otherDate), unit);
  }

  toISOString() {
    return this.date.toISOString();
  }
}

export default LiteMoment;
