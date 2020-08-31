import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  randomText:string = lorem.sentence();
  userText:string = "";

  onChangeText(value: string) {
    this.userText = value;

    console.log(this.userText);
  }

  checkLetter(randomLetter: string, userLetter: string) {
    if (!userLetter) return 'grey';
    return randomLetter === userLetter ? 'green' : 'red';
  }
    
}
