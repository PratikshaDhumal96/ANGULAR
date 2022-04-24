import { Component } from '@angular/core';

import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  hostUrl = environment.hostUrl;
  hostUName= environment.userName;
  hostPort = environment.port;
  hostToken = environment.token;

  title = 'Farmer';
}
