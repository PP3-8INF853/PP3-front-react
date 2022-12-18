import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";
import {CustomerSignUpDTO} from "../../../modals/CustomerSignUpDTO";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      firstname: new FormControl("", [Validators.required]),
      lastname: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      phoneNumber: new FormControl("", [Validators.required]),
    });
  }

  toLogin($event: MouseEvent) {
    this.router.navigate(['auth/login'])
      .then(r => console.log(r))
      .catch(err => console.error(err));
  }

  onSubmit($event: MouseEvent) {
    const registerDTO = {
      username: this.registerForm.get('username').value,
      password: this.registerForm.get('password').value,
      firstname: this.registerForm.get('firstname').value,
      lastname: this.registerForm.get('lastname').value,
      email: this.registerForm.get('email').value,
      phoneNumber: this.registerForm.get('phoneNumber').value,
    } as CustomerSignUpDTO;

    this.authService.register(registerDTO).subscribe({
      next: response => {
        this.router.navigate(['auth/login'])
          .then(r => console.log(r))
          .catch(err => console.error(err));
      },
      error: err => {
        alert("Une erreur s'est produite");
      }
    });

  }
}
