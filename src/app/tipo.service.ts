import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tipo } from './tipo';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  apiUrl = "http://localhost:3000/tipos"

  constructor(private httpClient: HttpClient) { }

  load(): Observable<Tipo[]> {
    return this.httpClient.get<Tipo[]>(this.apiUrl)
  }

  save(tipo: Tipo): Observable<Tipo> {
    return this.httpClient.post<Tipo>(this.apiUrl, tipo)
  }
}
