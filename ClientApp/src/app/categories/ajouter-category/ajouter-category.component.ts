import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../shared/models/category';
import {NotificationService} from '../../shared/services/notification.service';
import {CategoryService} from '../../shared/services/category.service';

@Component({
  selector: 'app-ajouter-category',
  templateUrl: './ajouter-category.component.html',
  styleUrls: ['./ajouter-category.component.css']
})
export class AjouterCategoryComponent implements OnInit {

  @Output() addCategoryEmitter: EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  submitted: boolean;
  ready: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private notifyService: NotificationService,
    private categoryService: CategoryService
  ) {
    this.submitted = false;
    this.ready = false;
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      categoryName: ['', [Validators.required, Validators.maxLength(60)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.categoryService.addCategory(new Category(this.form.value)).subscribe(
      () => {
        this.addCategoryEmitter.emit(null);
        this.onReset();
        this.notifyService.showSuccess('Catégorie ajoutée!', 'Success');
      },
      () => {
        this.notifyService.showError('Une erreur est survenue lors de la création de la catégorie', 'Erreur');
      }
    );
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }
}
