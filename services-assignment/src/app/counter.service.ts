export class CounterService {
  count = 0;

  constructor() {}

  incrementCount() {
    this.count++;
    console.log(this.count);
  }
}
