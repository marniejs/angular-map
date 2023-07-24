import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {ApiService } from '../../services/api.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{

  constructor(private api: ApiService)  {}

  @Output() countryName = new EventEmitter<string>;
  @Output() countryCapital = new EventEmitter<string>;
  @Output() countryRegion = new EventEmitter<string>;
  @Output() countryIncome = new EventEmitter<string>;
  @Output() latitude = new EventEmitter<string>;
  @Output() longitude = new EventEmitter<string>;

  
    getApiData(event: MouseEvent) {
      const path = event.target as SVGElement;
      const countryId = path.id;

      this.api.fetchAPIData(countryId).subscribe((data: any) => {
        let countryData = data[1][0];
        this.countryName.emit(countryData.name);
        this.countryCapital.emit(countryData.capitalCity);
        this.countryRegion.emit(countryData.region.value);
        this.countryIncome.emit(countryData.incomeLevel.value);
        this.latitude.emit(countryData.latitude);
        this.longitude.emit(countryData.longitude);
        console.log(countryData);
      })
     }
    
     ngOnInit(): void {
       
     }
  }
    
    
  

     
  
    
  
  
 

