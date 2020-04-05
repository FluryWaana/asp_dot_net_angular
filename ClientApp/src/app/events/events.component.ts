import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/services/event.service';
import {Event} from '../shared/models/event';
import {faPlusCircle, faFilter} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[]; // Liste des évènements
  formAddIsVisible: boolean; // Si le formulaire d'ajout doit être cacher
  formFilterIsVisible: boolean; // Si le formulaire de filtre doit être cacher
  ready: boolean;

  // Icon font awesome
  faPlusCircle = faPlusCircle;
  faFilter = faFilter;

  constructor(private eventService: EventService) {
    this.events = [];
    this.formAddIsVisible = false;
    this.formFilterIsVisible = false;
    this.ready = false;
  }

  ngOnInit() {
    this.populate();
  }

  /**
   * Récupère la liste des évènements
   */
  populate() {
    this.eventService.getAllEvent().subscribe(
      (response) => {
        this.events = [];
        this.ready = false;
        response.map(event => this.events.push(new Event().deserialize(event)));
      },
      (errorResponse) => {
        // TODO Traitement si erreur (formulaire, serveur)
      },
      () => {
        this.ready = true;
      }
    );
  }

  /**
   * Affiche ou cache le formulaire d'ajout d'évènement
   */
  addIsVisible() {
    this.formAddIsVisible = !this.formAddIsVisible;
    this.formFilterIsVisible = false;
  }

  /**
   * Affiche ou cache le formulaire de filtre
   */
  filterIsVisible() {
    this.formFilterIsVisible = !this.formFilterIsVisible;
    this.formAddIsVisible = false;
  }

  onEmitAddEvent() {
    this.addIsVisible();
    this.populate();
  }

}
