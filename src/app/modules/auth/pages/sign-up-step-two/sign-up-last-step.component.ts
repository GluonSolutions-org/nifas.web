import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../../../../core/components/base.component';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';


@Component({
  selector: 'nifas-sign-up-last-step',
  templateUrl: './sign-up-last-step.component.html',
  styleUrls: ['./sign-up-last-step.component.scss','../../styles/auth-shared.component.scss']
})
export class SignUpLastStepComponent extends BaseComponent{

  signUpForm !: FormGroup;

  constructor(injector: Injector, private fb: FormBuilder) {
    super(injector);

    this.signUpForm = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      rePassword: new FormControl('', [Validators.required]),
      confirmTerms: new FormControl(false, [Validators.requiredTrue]),
      haveInsurance: new FormControl(false),
    }, { validators: passwordsMatchValidator });
    
  }

  ngSuperOnInit() { };

  ngSuperAfterViewInit() {};

  ngSuperOnDestroy() { }

  onSubmit() { 
    console.log(this.signUpForm.value)
    this._router.navigate(['/auth/otp-page'])
  }

  get passwordsMismatch() {
    return this.signUpForm.errors?.['passwordsMismatch'];
  }
}

export function passwordsMatchValidator(formGroup: FormGroup): ValidationErrors | null {
  const password = formGroup.get('password');
  const rePassword = formGroup.get('rePassword');

  if (password && rePassword && password.value !== rePassword.value) {
    return { passwordsMismatch: true };
  }
  return null;
}