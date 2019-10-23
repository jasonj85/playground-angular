import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(
    private userService: UserService,
    private countService: CounterService
  ) {}

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }
}
