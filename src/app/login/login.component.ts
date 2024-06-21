import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean = true;
  loginForm!: FormGroup;
  signUpForm!: FormGroup;

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.pattern(RegExp('@gmail.com')),
        Validators.required,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [
        Validators.pattern(RegExp('@gmail.com')),
        Validators.required,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  onSwitch() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  onLogin() {
    const { email, password } = this.loginForm.value;
    if (!this.authService.login(email, password)) {
      alert('Invalid Credentials');
    }
    this.loginForm.get('password')?.reset();
  }

  onSignUp() {
    const { email, password } = this.signUpForm.value;
    this.authService.register(email, password);
    alert('Sign-up successful, please log in.');
    this.onSwitch();
  }
}
