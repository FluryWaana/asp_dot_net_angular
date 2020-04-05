import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../shared/models/category';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {CategoryService} from '../../shared/services/category.service';
import {NotificationService} from '../../shared/services/notification.service';

@Component({
  selector: 'app-element-category',
  templateUrl: './element-category.component.html',
  styleUrls: ['./element-category.component.css']
})
export class ElementCategoryComponent implements OnInit {
  @Input() category: Category;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  faTrashAlt = faTrashAlt;

  constructor(
    private categoryService: CategoryService,
    private notifyService: NotificationService
  ) {
  }

  ngOnInit() {
  }

  deleteEvent() {
    if (confirm('Êtes-vous sur de vouloir supprimer la catégorie ' + this.category.categoryName)) {
      this.categoryService.removeCategory(this.category).subscribe(
        (response) => {
          this.notifyService.showSuccess('Catégorie supprimée!', 'Success');
          this.onDelete.emit(null);
        },
        (errorResponse) => {
          this.notifyService.showError('Impossible de supprimer une catégorie qui contient des évènements', 'Erreur');
        }
      );
    }
  }

}
