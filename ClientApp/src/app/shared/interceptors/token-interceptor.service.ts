import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.authService.getIsAuth() && this.authService.getToken()) {
      this.authService.setIsAuth(true);
    }
    return next.handle(request.clone(this.setHeader())).pipe(
      catchError(err => {
        // TODO Gestion des erreurs && refresh token
        return throwError(err);
      })
    );
  }

  private setHeader() {
    return {
      setHeaders: {
        'Authorization': 'Bearer ' + this.authService.getToken()
      }
    };
  }

  // this.router.navigate(['/login']);
}
