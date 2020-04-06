import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthenticateModel} from '../models/authenticate-model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth: boolean;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.isAuth = false;
  }

  login(authenticateModel: AuthenticateModel): Observable<any> {
    return this.httpClient.post<AuthenticateModel>(environment.api_url + 'authentification/login', authenticateModel);
  }

  logout(): void {
    this.removeUser();
    this.removeToken();
    this.isAuth = false;
    this.router.navigate(['/']);
  }

  authSuccess(user, token): void {
    this.setUser(user);
    this.setToken(token);
    this.isAuth = true;
  }

  getUser(): User {
    return new User(JSON.parse(sessionStorage.getItem('user')));
  }

  setUser(user: User): void {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  removeUser(): void {
    sessionStorage.removeItem('user');
  }

  getToken(): string {
    return sessionStorage.getItem('token');
  }

  setToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  removeToken(): void {
    sessionStorage.removeItem('token');
  }

  getIsAuth(): boolean {
    return this.isAuth;
  }

  setIsAuth(isAuth: boolean): void {
    this.isAuth = isAuth;
  }
}
