import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private apiUrlCervezas = environment.apiUrlCervezas;

  constructor(private http: HttpClient) {}

  getCervezas(): Observable<any> {
    return this.http.get<any>(`${this.apiUrlCervezas}/beers`);
  }
}
