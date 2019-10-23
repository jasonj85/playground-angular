import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(
    private userService: UserService,
    private countService: CounterService
  ) {}

  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
  }

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }
}
