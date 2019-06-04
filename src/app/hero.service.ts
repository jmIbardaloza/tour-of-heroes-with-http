import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({ 
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService, private http: HttpClient) { }
  
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  
  private heroesUrl = 'https://jsonplaceholder.typicode.com/users';  // URL to web api

  /** GET heroes from the server */
  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
  }
}
