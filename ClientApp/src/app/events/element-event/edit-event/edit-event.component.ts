import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../../shared/models/event';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from '../../../shared/services/event.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { Category } from '../../../shared/models/category';
import { CategoryService } from '../../../shared/services/category.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  @Input() event: Event
  @Output() addEventEmitter: EventEmitter<Event> = new EventEmitter();

  form: FormGroup;
  submitted: boolean;
  categories: Category[];
  ready: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private notifyService: NotificationService,
    private categoryService: CategoryService
  ) {
    this.submitted = false;
    this.ready = false;
    this.categories = [];
  }

  ngOnInit() {
    this.categoryService.getAllCategory().subscribe(
      (response) => {
        response.map(category => this.categories.push(new Category().deserialize(category)));
        this.ready = true;
      },
      (errorResponse) => {
        // TODO Traitement si erreur (formulaire, serveur)
      }
    );

    this.form = this.formBuilder.group({
      eventId: [this.event.eventId],
      title: [this.event.title, [Validators.required, Validators.maxLength(60)]],
      eventDate: [new Date(this.event.eventDate).toISOString().substring(0, 10), Validators.required],
      description: [this.event.description, Validators.required],
      categoryId: [this.event.categoryId, Validators.required]
    });
  }

  onChange() {
    const categoryId = this.form.get('categoryId');
    const value = categoryId.value;

    if (value != '') {
      categoryId.setValue(+ value);
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    let evt: Event = new Event(this.form.value);
    this.eventService.updateEvent(evt).subscribe(
      (response) => {
        this.notifyService.showSuccess("Évènement mis à jour!","Success");
        this.addEventEmitter.emit(evt);
      },
      (responseError) => {
        this.notifyService.showError("Une erreur est survenue lors de la modification de l'évènement", "Erreur");
        // TODO Gérer les erreurs (formulaire, serveur)
      }
    );
  }

  get f() {
    return this.form.controls;
  }

  onCancel() {
    this.addEventEmitter.emit(null);
  }
}
