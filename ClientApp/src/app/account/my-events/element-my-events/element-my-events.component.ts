import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Event} from '../../../shared/models/event';
import {EventService} from '../../../shared/services/event.service';
import {NotificationService} from '../../../shared/services/notification.service';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-element-my-events',
  templateUrl: './element-my-events.component.html',
  styleUrls: ['./element-my-events.component.css']
})
export class ElementMyEventsComponent implements OnInit {
  @Input() event: Event;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  faTrashAlt = faTrashAlt;

  constructor(
    private eventService: EventService,
    private notifyService: NotificationService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  deleteEvent() {
    if (confirm('Êtes-vous sur de vouloir supprimer votre participation à l\'évènement ' + this.event.title)) {
      this.eventService.removeEventByUser(this.authService.getUser(), this.event).subscribe(
        (response) => {
          this.notifyService.showSuccess('Évènement supprimé!', 'Success');
          this.onDelete.emit(null);
        },
        (errorResponse) => {
          this.notifyService.showError('', 'Erreur');
        });
    }
  }
}
