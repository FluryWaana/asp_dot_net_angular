import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {AuthenticateModel} from '../shared/models/authenticate-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  submitted: boolean;
  error: string;
  hasError: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.submitted = false;
    this.hasError = false;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(180)] ],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.authService.login(new AuthenticateModel(this.form.value)).subscribe(
      (response) => {
        const {user, token} = response;
        this.authService.authSuccess(user, token);
        this.cleanError();
        this.router.navigate( ['/'] );
      },
      (errorReponse) => {
        console.log(errorReponse);
        const {error} = errorReponse;
        this.hasError = true;
        this.error = error.message;
      }
    );
  }

  get f() {
    return this.form.controls;
  }

  cleanError() {
    this.hasError = false;
    this.error = '';
  }
}
