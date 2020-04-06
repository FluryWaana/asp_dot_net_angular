import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';
import {User} from '../shared/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  submitted: boolean;
  error: string;
  hasError: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      lastName: ['', [Validators.required, Validators.maxLength(60)] ],
      firstName: ['', [Validators.required, Validators.maxLength(60)] ],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(180)] ],
      password: ['', Validators.required, Validators.minLength(6)],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.authService.addUser(new User(this.form.value)).subscribe(
      (reponse) => {
        this.form.reset();
        this.router.navigate(['/login']);
      },
      (errorResponse) => {
        this.error = 'Erreur de la mort qui tue? Adresse email déjà existante? Ou une erreur de serveur au choix?';
        this.hasError = true;
      },
      () => {

      }
    )
  }

  get f() {
    return this.form.controls;
  }

  cleanError() {
    this.hasError = false;
    this.error = '';
  }
}
