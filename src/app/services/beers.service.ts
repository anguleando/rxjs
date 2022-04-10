import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Cerveza } from '../models/cerveza.interface';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  // https://punkapi.com/documentation/v2
  private apiUrlCervezas = environment.apiUrlCervezas;

  constructor(private http: HttpClient) {}

  getCervezas(): Observable<Cerveza[]> {
    return this.http.get<Cerveza[]>(`${this.apiUrlCervezas}/beers?page=1&per_page=80`);
  }

  getCerveza(id_cerveza: number): Observable<Cerveza> {
    return this.http.get<Cerveza>(`${this.apiUrlCervezas}/beers/${id_cerveza}?page=1&per_page=80`);
  }
}
