import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = true;
  clicks = [];
  count = 0;

  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.count++;
    this.clicks.push(this.count);
  }

  checkClicks(num) {
    return num > 4 ? 'blue' : 'none';
  }
}
