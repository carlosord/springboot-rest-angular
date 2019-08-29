import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PeopleServiceService } from 'src/app/service/people-service.service';

@Component({
  selector: 'app-people-delete',
  templateUrl: './people-delete.component.html',
  styleUrls: ['./people-delete.component.css']
})
export class PeopleDeleteComponent implements OnInit {

  @Input() id: number;
  @Output() reload: EventEmitter<any> = new EventEmitter<any>();

  constructor(private peopleService: PeopleServiceService) { }

  ngOnInit() {
  }

  deletePerson() {
    console.log(this.id);
    this.peopleService.deletePerson(this.id).subscribe(
      response => {
        this.reload.emit({ "message":"Person deleted" });
      }
    );
  }

}
