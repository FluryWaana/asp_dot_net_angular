import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../../shared/models/user';
import {Event} from '../../../../shared/models/event';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {EventService} from '../../../../shared/services/event.service';
import {NotificationService} from '../../../../shared/services/notification.service';

@Component({
  selector: 'app-element-user-event',
  templateUrl: './element-user-event.component.html',
  styleUrls: ['./element-user-event.component.css']
})
export class ElementUserEventComponent implements OnInit {

  @Input() user: User;
  @Input() event: Event;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  faTrashAlt = faTrashAlt;

  constructor(
    private eventService: EventService,
    private notifyService: NotificationService
  ) { }

  ngOnInit() {
  }

  deleteUserEvent() {
    if (confirm('Êtes-vous sur de vouloir supprimer l\'utilisateur ' + this.user.lastName.toUpperCase() + ' ' + this.user.firstName + ' de l\'évènement?')) {
      this.eventService.removeUserFromEvent(this.event, this.user).subscribe(
        (response) => {
          this.onDelete.emit(null);
          this.notifyService.showSuccess('Utilisateur retiré de l\'évènement!', 'Success');
        },
        (errorResponse) => {
          this.notifyService.showError('Une erreur est survenue lors de la suppression de l\'utilisateur dans l\'évènement', 'Erreur');
        }
      );
    }
  }

}
