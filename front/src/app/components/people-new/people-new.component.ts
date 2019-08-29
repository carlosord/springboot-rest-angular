import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PeopleServiceService } from 'src/app/service/people-service.service';

declare var $: any;

@Component({
  selector: 'app-people-new',
  templateUrl: './people-new.component.html',
  styleUrls: ['./people-new.component.css']
})
export class PeopleNewComponent implements OnInit {

  personForm: Person = new Person();
  
  @Output() reload: EventEmitter<any> = new EventEmitter<any>();

  constructor(private peopleService: PeopleServiceService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.personForm);
    this.peopleService.savePerson(this.personForm).subscribe(
      response => {
        this.reload.emit({ "message":"Person added" });
        $("#exampleModal").modal('toggle');
      }
    );
  }

}
