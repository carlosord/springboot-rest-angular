import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleServiceService {

  private baseUrl = 'http://localhost:8080/api/people/';

  constructor(private http: HttpClient) { }

  getPeopleList(): Observable<any> {
    return this.http.get(this.baseUrl + "all");
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + "delete/" + id);
  }

  savePerson(person: Person): Observable<any> {
    return this.http.post(this.baseUrl + "new", person);
  }

  updatePerson(person: Person): Observable<any> {
    return this.http.put(this.baseUrl + "edit", person);
  }

}
