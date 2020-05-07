export default class Timer {

  constructor (begin = 5, until = 1, unit = 1000) {
    this.begin = begin;
    this.until = until;
    this.unit = unit;
    this.now = begin;
  }

  start() {
    this.now = this.begin;
    const interval = setInterval(() => {
      this.now--
      console.log(this.now);
      
      if (this.now < this.until) {
        clearInterval(interval);
        console.log(this.now, 'boooo');
      }
    }, this.unit);
  }
}
