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

  insurancesList: any[] = [
    { name: 'insurances0', id:0 },
    { name: 'insurances1', id:1 },
    { name: 'insurances2', id:2 },
    { name: 'insurances3', id:3 },
    { name: 'insurances4', id:4 },
    { name: 'insurances5', id:5 },
    { name: 'insurances6', id:6 },
    { name: 'insurances7', id:7 },
    { name: 'insurances8', id:8 },
    { name: 'insurances9', id:9 }
  ];

  constructor(injector: Injector, private fb: FormBuilder) {
    super(injector);

    this.signUpForm = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      rePassword: new FormControl('', [Validators.required]),
      confirmTerms: new FormControl(false, [Validators.requiredTrue]),
      haveInsurance: new FormControl(false),
      selctedInsurances: new FormControl(null),
    }, { validators: passwordsMatchValidator });
    
  }

  ngSuperOnInit() {};

  ngSuperAfterViewInit() {};

  ngSuperOnDestroy() { }

  onSubmit() { 
    console.log(this.signUpForm.value)
    this._router.navigate(['/auth/otp-page'])
  }

  get passwordsMismatch() {
    return this.signUpForm.errors?.['passwordsMismatch'];
  }

  toggleChange() {
     const toogleValue = this.signUpForm.get('haveInsurance')?.value
     const selctedInsurances = this.signUpForm.get('selctedInsurances')

     if(toogleValue) {
      selctedInsurances?.setValidators([Validators.required]);
     } else {
      selctedInsurances?.setValidators([]);
     }

     selctedInsurances?.reset();
     selctedInsurances?.updateValueAndValidity(); 

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