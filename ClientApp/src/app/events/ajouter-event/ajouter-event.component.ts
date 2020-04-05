import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../../shared/services/event.service';
import { Event } from '../../shared/models/event';
import { NotificationService } from '../../shared/services/notification.service';
import {Category} from '../../shared/models/category';
import {CategoryService} from '../../shared/services/category.service';

@Component({
  selector: 'app-ajouter-event',
  templateUrl: './ajouter-event.component.html',
  styleUrls: ['./ajouter-event.component.css']
})
export class AjouterEventComponent implements OnInit {
  form: FormGroup;
  submitted: boolean;
  categories: Category[];
  ready: boolean;

  @Output() addEventEmitter: EventEmitter<any> = new EventEmitter();

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
      title: ['', [Validators.required, Validators.maxLength(60)] ],
      eventDate: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: ['', Validators.required]
    });
  }

  onChange() {
    const categoryId = this.form.get('categoryId');
    const value = categoryId.value;

    if (value != '') {
      categoryId.setValue(+ value );
    }
  }

  onSubmit() {
    console.log(new Event(this.form.value));
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.eventService.addEvent(new Event(this.form.value)).subscribe(
      (response) => {
        this.addEventEmitter.emit(null);
        this.onReset();
        this.notifyService.showSuccess('Évènement ajouté!', 'Success');
      },
      (responseError) => {
        this.notifyService.showError('Une erreur est survenue lors de la création de l\'évènement', 'Erreur');
        // TODO Gérer les erreurs (formulaire, serveur)
      }
    );
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }

  get f() {
    return this.form.controls;
  }

}
