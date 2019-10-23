import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allowAddData = false;
  name = '';
  dataCreationStatus = 'No data was created!';
  id = 10;
  status = 'online';
  dataCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowAddData = true;
    }, 2000);
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.id;
  }

  onCreateData() {
    this.dataCreationStatus = 'Data has been created.';
    this.dataCreated = true;
  }

  onUpdateData(event: any) {
    this.name = event.target.value;
  }

  getColor() {
    return this.status === 'online' ? 'green' : 'red';
  }
}
