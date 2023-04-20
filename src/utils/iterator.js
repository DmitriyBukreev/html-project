class Iterator {
  constructor(from, to) {
    this.current = from;
    this.to = to;
  }

  next() {
    if (this.current <= this.to) return { done: false, value: this.current++ };
    else return { done: true };
  }
}

class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  [Symbol.iterator]() {
    return new Iterator(this.from, this.to);
  }
}

module.exports = function (from, to) {
  return new Range(from, to);
};
