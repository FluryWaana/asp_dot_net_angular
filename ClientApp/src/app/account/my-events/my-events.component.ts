import {Component, OnInit} from '@angular/core';
import {EventService} from '../../shared/services/event.service';
import {AuthService} from '../../shared/services/auth.service';
import {Event} from '../../shared/models/event';
import {NotificationService} from '../../shared/services/notification.service';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {
  events: Event[];
  ready: boolean;
  formAddIsVisible: boolean; // Si le formulaire d'ajout doit être cacher
  faPlusCircle = faPlusCircle;

  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private notifyService: NotificationService
  ) {
    this.ready = false;
  }

  ngOnInit() {
    this.populate();
  }

  populate() {
    this.eventService.getEventsByUser(this.authService.getUser()).subscribe(
      (response) => {
        this.events = [];
        response.map(event => this.events.push(new Event().deserialize(event)));
      },
      (errorResponse) => {
        this.notifyService.showError('Vous êtes déjà inscrit à l\'évènement ', 'Erreur');
      },
      () => {
        this.ready = true;
      }
    );
  }

  onEmitAddEvent() {
    this.populate();
  }

  /**
   * Affiche ou cache le formulaire d'ajout d'évènement
   */
  addIsVisible() {
    this.formAddIsVisible = !this.formAddIsVisible;
  }

}
