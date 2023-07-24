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

  countryName!: string;
  countryCapital!: string;
  countryRegion!: string;
  countryIncome!: string;
  latitude!: string;
  longitude!: string;

  changeCountryName(value: string) {
    this.countryName = value;
  }

  changeCountryCapital(value: string){
    this.countryCapital = value;
  }

  changeCountryRegion(value: string){
    this.countryRegion = value;
  }
  
  changeCountryIncome(value: string){
    this.countryIncome = value;
  }

  changeLatitude(value: string){
    this.latitude = value;
  }
  changeLongitude(value: string){
    this.longitude = value;
  }

  ngOnInit(): void {}
}
