import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers = [];
  inactiveUsers = [];
  changes: number;

  constructor(
    private userService: UserService,
    private countService: CounterService
  ) {
    this.changes = this.countService.count;
  }
}
