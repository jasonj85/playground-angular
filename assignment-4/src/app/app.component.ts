import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  intervalFired: number;
  resetFired: boolean;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(num: number) {
    if (num % 2 === 0) {
      this.evenNumbers.push(num);
    } else {
      this.oddNumbers.push(num);
    }
  }

  onResetFired(reset: Boolean) {
    this.evenNumbers = [];
    this.oddNumbers = [];
  }
}
