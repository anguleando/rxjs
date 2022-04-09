import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Cerveza } from '../models/cerveza.interface';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private apiUrlCervezas = environment.apiUrlCervezas;

  constructor(private http: HttpClient) {}

  getCervezas(): Observable<Cerveza[]> {
    return this.http.get<Cerveza[]>(`${this.apiUrlCervezas}/beers`);
  }
}
