import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  apiUrl = "http://localhost:3000/contatos"

  constructor(private httpClient: HttpClient) { }

  save(contato: Contato): Observable<Contato> {
    return this.httpClient.post<Contato>(this.apiUrl, contato)
  }
}
