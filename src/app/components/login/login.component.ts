import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validator,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isHidden: boolean = false;
  isLooding: boolean = false;
  errMsg: string = '';
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^[A-Z][\w\S]{3,}[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~][0-9][\w\S]*$/
        ),
      ]),
    });

   
  }
  handelLogin(loginForm:FormGroup)
  {
    this.isLooding = true;
    this._AuthService.login(loginForm.value).subscribe({
      next:(res)=>{
        localStorage.setItem("userToken",res.token)
       this._AuthService.decoded() 
        this._Router.navigate(['/home']);
        console.log(res);
      } ,
      error: (err) => {
        console.log(err.error.message),
          (this.isLooding = false),
          (this.errMsg = err.error.message);
      },
    })
  }
  showPassword() {
    this.isHidden = !this.isHidden;
  }
}


