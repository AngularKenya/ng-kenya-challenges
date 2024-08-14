import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse, Character } from '../model/character.model'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<ApiResponse>(`${this.apiUrl}?page=1`).pipe(
      map(response => response.results.slice(0, 20))  
    );
  }
}
