import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {





  constructor(private http: HttpClient) { }

  users() {
    const url = 'https://randomuser.me/api/?results=20';
    return this.http.get(url); // Fetch 10 users
  }

  Joke() {
    return this.http.get('https://official-joke-api.appspot.com/random_joke');
  }

  fetchIpInfo() {
    return this.http.get('https://ipinfo.io/161.185.160.93/geo');
  }

  fetchUniversities(): Observable<any[]> {
    return this.http.get<any[]>('http://universities.hipolabs.com/search?country=United+States')
      .pipe(map(data => data.slice(0, 10))); // Get only first 10 records
  }
}



