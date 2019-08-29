import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { Observable } from 'rxjs';
import { PeopleServiceService } from 'src/app/service/people-service.service';

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: Observable<Person[]>;
 
  constructor(private peopleService: PeopleServiceService) { }
 
  ngOnInit() {
    this.reloadData();
  }
 
  reloadData(event?: Event) {
    if (event) console.log(event);
    this.people = this.peopleService.getPeopleList();
  }

}
