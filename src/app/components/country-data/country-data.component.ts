import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.css']
})
export class CountryDataComponent implements OnInit{

  constructor() {}

  @Input() countryName!: string;
  @Input() countryCapital!: string;
  @Input() countryIncome!: string;
  @Input() countryRegion!: string;
  @Input() latitude!: string;
  @Input() longitude!: string;

  ngOnInit(): void {
    
  }
}
