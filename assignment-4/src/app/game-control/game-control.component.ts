import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';
import { Time } from '@angular/common';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  @Output() resetFired = new EventEmitter<boolean>();

  interval;
  increment = 0;

  @Output() emitTest = new EventEmitter<{}>();

  constructor() {}

  ngOnInit() {}

  startGame() {
    const source = interval(1000);
    this.interval = source.subscribe(() =>
      this.intervalFired.emit(this.increment++)
    );
  }

  stopGame() {
    this.interval.unsubscribe();
  }

  resetGame() {
    this.stopGame();
    this.increment = 0;
    this.resetFired.emit(true);
  }
}
