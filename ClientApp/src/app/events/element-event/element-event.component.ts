import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Event} from '../../shared/models/event';
import {faEdit, faEye, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {EventService} from '../../shared/services/event.service';
import {NotificationService} from '../../shared/services/notification.service';

@Component({
  selector: 'app-element-event',
  templateUrl: './element-event.component.html',
  styleUrls: ['./element-event.component.css']
})
export class ElementEventComponent implements OnInit {
  @Input() event: Event;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faEye = faEye;

  editIsVisible: boolean;
  listIsVisible: boolean;


  constructor(
    private eventService: EventService,
    private notifyService: NotificationService
  ) {
    this.editIsVisible = false;
    this.listIsVisible = false;
  }

  ngOnInit() {
  }

  listUsersIsVisible() {
    this.listIsVisible = !this.listIsVisible;
    this.editIsVisible = false;
  }

  editerFormIsVisible() {
    this.editIsVisible = !this.editIsVisible;
    this.listIsVisible = false;
  }

  updateOldEvent(event: Event) {
    if (event != null) {
      this.event = event;
    }
    this.editIsVisible = false;
  }

  deleteEvent() {
    if (confirm('Êtes-vous sur de vouloir supprimer l\'évènement ' + this.event.title)) {
      this.eventService.removeEvent(this.event).subscribe(
        (response) => {
          this.notifyService.showSuccess('Évènement supprimé!', 'Success');
          this.onDelete.emit(null);
        },
        (errorResponse) => {
          this.notifyService.showError('Impossible de supprimer un évènement qui contient des utilisateurs', 'Erreur');
        });
    }
  }
}
