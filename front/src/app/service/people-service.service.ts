import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleServiceService {

  private baseUrl = 'http://localhost:8080/api/people/';

  constructor(private http: HttpClient) { }

  getPeopleList(): Observable<any> {
    return this.http.get(this.baseUrl + "all");
  }

}
