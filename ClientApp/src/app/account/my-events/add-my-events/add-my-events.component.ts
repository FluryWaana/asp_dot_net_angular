import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Event} from '../../../shared/models/event';
import {EventService} from '../../../shared/services/event.service';
import {AuthService} from '../../../shared/services/auth.service';
import {NotificationService} from '../../../shared/services/notification.service';
import {User} from '../../../shared/models/user';
import {Participate} from '../../../shared/models/participate';

@Component({
  selector: 'app-add-my-events',
  templateUrl: './add-my-events.component.html',
  styleUrls: ['./add-my-events.component.css']
})
export class AddMyEventsComponent implements OnInit {

  form: FormGroup;
  submitted: boolean;
  events: Event[];
  ready: boolean;
  user: User;

  @Output() addEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private notifyService: NotificationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.populate();
    this.form = this.formBuilder.group({
      event: ['', [Validators.required, Validators.maxLength(60)]]
    });
  }

  populate() {
    this.eventService.getEventsByUserNoParticipate(this.user).subscribe(
      (response) => {
        this.events = [];
        response.map(event => this.events.push(new Event().deserialize(event)));
      },
      (errorResponse) => {
        this.notifyService.showError('Une erreur est survenue lors du chargement des évènements', 'Erreur');
      },
      () => {
        this.ready = true;
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const participate = new Participate();
    participate.eventId = this.form.get('event').value;
    participate.userId = this.user.userId;

    this.eventService.addEventToUser(participate).subscribe(
      () => {
        this.addEventEmitter.emit(null);
        this.notifyService.showSuccess('Évènement ajouté!', 'Success');
      },
      () => {
        this.notifyService.showError('Une erreur est survenue lors de l\'inscription à l\'évènement', 'Erreur');
      }
    );
  }

  onChange() {
    const event = this.form.get('event');
    const value = event.value;

    if (value !== '') {
      event.setValue(+value);
    }
  }

  get f() {
    return this.form.controls;
  }
}
