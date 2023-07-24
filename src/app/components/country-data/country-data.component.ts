import { Component, Input, OnInit } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.css']
})
export class CountryDataComponent {

  constructor() {}

  @Input() countryName!: string;
  @Input() countryCapital!: string;
  @Input() countryIncome!: string;
  @Input() countryRegion!: string;
  @Input() latitude!: string;
  @Input() longitude!: string;

}
