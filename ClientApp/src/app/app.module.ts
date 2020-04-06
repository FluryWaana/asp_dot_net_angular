import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {HomeComponent} from './home/home.component';
import {EventsComponent} from './events/events.component';
import {ElementEventComponent} from './events/element-event/element-event.component';
import {FiltrerEventComponent} from './events/filtrer-event/filtrer-event.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AjouterEventComponent} from './events/ajouter-event/ajouter-event.component';
import {SpinnerComponent} from './shared/components/spinner/spinner.component';
import {EditEventComponent} from './events/element-event/edit-event/edit-event.component';
import {UsersEventComponent} from './events/element-event/users-event/users-event.component';
import {ElementUserEventComponent} from './events/element-event/users-event/element-user-event/element-user-event.component';
import {CategoriesComponent} from './categories/categories.component';
import {ElementCategoryComponent} from './categories/element-category/element-category.component';
import {AjouterCategoryComponent} from './categories/ajouter-category/ajouter-category.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuard} from './shared/guards/auth.guard';
import {TokenInterceptorService} from './shared/interceptors/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    EventsComponent,
    AjouterEventComponent,
    EditEventComponent,
    ElementEventComponent,
    FiltrerEventComponent,
    SpinnerComponent,
    UsersEventComponent,
    ElementUserEventComponent,
    CategoriesComponent,
    ElementCategoryComponent,
    AjouterCategoryComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
