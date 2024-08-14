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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isHidden: boolean = false;
 
  errMsg: string = '';
  isLooding: boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.pattern(
            /^[A-Z][\w\S]{3,}[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~][0-9][\w\S]*$/
          ),
        ]),
        rePassword: new FormControl(null, [Validators.required]),
        phone: new FormControl(null, [
          Validators.required,
          Validators.pattern(/01[0125][0-9]{8}/),
        ]),
      },
      { validators: this.mustMatch('password', 'rePassword') }
    );
  }

  mustMatch(password: string, rePassword: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const passControl = formGroup.get(password);
      const confirmPassControl = formGroup.get(rePassword);

      if (!passControl || !confirmPassControl) {
        return null;
      }

      if (
        confirmPassControl.errors &&
        !confirmPassControl.errors['mustMatch']
      ) {
        return null;
      }

      if (passControl.value !== confirmPassControl.value) {
        confirmPassControl.setErrors({ mustMatch: true });
      } else {
        confirmPassControl.setErrors(null);
      }

      return null;
    };
  }

  handelRegister(registerForm: FormGroup) {
    this.isLooding = true;
    this._AuthService.register(registerForm?.value).subscribe({
      next: (res) => {
        this._Router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err.error.message),
          (this.isLooding = false),
          (this.errMsg = err.error.message);
      },
    });
  }
  showPassword() {
    this.isHidden = !this.isHidden;
  }
}
