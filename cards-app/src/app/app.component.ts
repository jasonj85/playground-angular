import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: 'Beautiful tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'natureDude',
      content: 'I saw this great tree today',
    },
    {
      title: 'Snowy mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainHiFive',
      content: 'Where are my skis!?',
    },
    {
      title: 'Mountain biking!',
      imageUrl: 'assets/biking.jpeg',
      username: 'lanceLegStrong',
      content: 'What a cool place for a ride!',
    },
  ]


}
