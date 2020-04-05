import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../shared/models/user';
import { Event } from '../../../shared/models/event';
import { EventService } from '../../../shared/services/event.service';

@Component({
  selector: 'app-users-event',
  templateUrl: './users-event.component.html',
  styleUrls: ['./users-event.component.css']
})
export class UsersEventComponent implements OnInit {

  @Input() event: Event;
  users: User[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.users = new Array();
    this.populate();
  }

  populate() {
    this.eventService.getUsersByEvent(this.event).subscribe(
      (response) => {
        this.users = new Array();
        response.map(user => this.users.push(new User().deserialize(user)));
        console.log(this.users);
      },
      (errorResponse) => {
        // TODO Gérer erreurs (serveur);
      }
    );
  }

}
