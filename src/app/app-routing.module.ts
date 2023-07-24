import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { CountryDataComponent } from './components/country-data/country-data.component';

const routes: Routes = [
  {
    path: 'map-component',
    component: MapComponent,
    children: [
      {
        path: 'country-data-component',
        component: CountryDataComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
