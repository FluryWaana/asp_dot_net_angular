import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Category} from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  getAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(environment.api_url + 'categories');
  }

  addCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(environment.api_url + 'categories', category);
  }

  removeCategory(category: Category): Observable<Category> {
    return this.httpClient.delete<Category>(environment.api_url + 'categories/' + category.categoryId);
  }
}
