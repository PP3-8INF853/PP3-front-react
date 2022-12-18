import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";
import {CustomerLoginDTO} from "../../../modals/CustomerLoginDTO";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }

  toRegister($event: MouseEvent) {
    this.router.navigate(['auth/register'])
      .then(r => console.log(r))
      .catch(err => console.error(err));
  }

  onSubmit($event: MouseEvent): void {
    const loginDTO = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value,
    } as CustomerLoginDTO;

    this.authService.login(loginDTO).subscribe({
      next: response => {
        this.router.navigate([''])
          .then(r => console.log(r))
          .catch(err => console.error(err));
      },
      error: err => {
        alert("Une erreur s'est produite");
      }
    });
  }
}
