import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroes: {};
  URI_API = 'http://localhost:3000/superheroes';

  constructor(private http: HttpClient) { }

  getHeroes(){
    return this.http.get(this.URI_API);
  }
}
