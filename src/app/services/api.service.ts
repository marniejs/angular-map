import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, map, tap, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  

  constructor(private http: HttpClient) { }

  fetchAPIData(countryId: string): Observable<any> {
    const url = `http://api.worldbank.org/v2/country/${countryId}?format=json`;
    return this.http.get<any>(url);
  }
  
}
