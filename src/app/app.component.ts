import { Component, OnInit } from '@angular/core';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-map';

  constructor (private api: ApiService) {}

  ngOnInit(): void {
    
  }
}
