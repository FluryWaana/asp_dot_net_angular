import {Component, OnInit} from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {Category} from '../shared/models/category';
import {CategoryService} from '../shared/services/category.service';
import {NotificationService} from '../shared/services/notification.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  formAddIsVisible: boolean; // Si le formulaire d'ajout doit être cacher
  ready: boolean;

  // Icon font awesome
  faPlusCircle = faPlusCircle;

  constructor(
    private categoryService: CategoryService,
    private notifyService: NotificationService
  ) {
    this.categories = [];
    this.formAddIsVisible = false;
    this.ready = false;
  }

  ngOnInit() {
    this.populate();
  }

  populate() {
    this.categoryService.getAllCategory().subscribe(
      (response) => {
        this.categories = [];
        response.map(category => this.categories.push(new Category().deserialize(category)));
        this.ready = true;
      },
      (errorResponse) => {
        this.notifyService.showError('Une erreur est survenue lors du chargement des catégories', 'Erreur');
      });
  }

  onEmitAddEvent() {
    this.populate();
  }

  addIsVisible() {
    this.formAddIsVisible = !this.formAddIsVisible;
  }

}
