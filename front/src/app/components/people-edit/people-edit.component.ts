import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/model/person';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PeopleServiceService } from 'src/app/service/people-service.service';

declare var $: any;

@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html',
  styleUrls: ['./people-edit.component.css']
})
export class PeopleEditComponent implements OnInit {

  @Input() person: Person;
  @Output() reload: EventEmitter<any> = new EventEmitter<any>();

  personForm: FormGroup;  

  constructor(private formBuilder: FormBuilder, private peopleService: PeopleServiceService) { }

  ngOnInit() {
    this.personForm = this.formBuilder.group({
      id: [this.person.id],
      dni: [this.person.dni],
      name: [this.person.name],
      lastname: [this.person.lastname],
      birthday: [this.person.birthday],
      gender: [this.person.gender],
      hascar: [this.person.hascar]
    });
  }

  onSubmit() {
    console.log(this.personForm.value);
    this.peopleService.updatePerson(this.personForm.value).subscribe(
      response => {
        this.reload.emit({ "message":"Person updated" });
        $("#edit" + this.personForm.value.id).modal('toggle');
      },
      error => { 
        this.reload.emit({ "message":"Error updating person" });
      }
    );
  }

}
