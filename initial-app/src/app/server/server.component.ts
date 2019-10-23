import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  servers = ['Test Server', 'Abc Server', 'Best Server'];
  serverName = '';

  constructor() {}

  ngOnInit() {}

  addServer() {
    this.servers.push(this.serverName);
    this.serverName = '';
    document.getElementById('serverName').focus();
  }
}
