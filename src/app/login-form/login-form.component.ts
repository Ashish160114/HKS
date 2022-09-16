import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../environments/environment';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private login: LoginService) {

  }

  reactiveForm = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new UntypedFormControl('', [Validators.required]),
  })
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.reactiveForm.status == 'INVALID') return
    this.router.navigate(['/dashboard'])
    this.login.getLogin(this.reactiveForm.controls['email'].value, this.reactiveForm.controls['password'].value).subscribe((res: any) => {
      if (res.status) {
        this.snackbar.open('Login Successfully.', '', {
          duration: 3000
        });
        // this.router.navigate(['/dashboard'])
      }
      else {
        this.snackbar.open('Invalid Credentials.', '', {
          duration: 3000
        });
      }

    })
  }

}
