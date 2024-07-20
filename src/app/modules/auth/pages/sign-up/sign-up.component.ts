import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../../../../core/components/base.component';
import { ITabs } from '../../../../shared/interfaces/tabs.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationTabsEnum } from '../../enums/registration-tab.enum';


@Component({
  selector: 'nifas-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss','../../styles/auth-shared.component.scss']
})
export class SignUpComponent extends BaseComponent{

  selctedTab : RegistrationTabsEnum = RegistrationTabsEnum.phone;
  registrationTabsEnum = RegistrationTabsEnum;

  tabs: ITabs[] = [
    {
      label: 'Phone',
      id: 0
    },
    {
      label: 'Email',
      id: 1
    }
  ]

  signUpForm: FormGroup = new FormGroup(
  {
    phone: new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
    email: new FormControl('',[]),
  })

  constructor(injector: Injector) {
    super(injector);
  }

  ngSuperOnInit() { };

  ngSuperAfterViewInit() {};

  ngSuperOnDestroy() { }

  onSelectTab(id: any) {
    this.selctedTab = id

 

    let email = this.signUpForm.get('email');
    let phone = this.signUpForm.get('phone');

    switch (this.selctedTab) {
      case this.registrationTabsEnum.phone:

        email?.clearValidators();  
        phone?.setValidators([Validators.required,Validators.minLength(11),Validators.maxLength(11)]);

        break;
      case this.registrationTabsEnum.email:

        phone?.clearValidators();  
        email?.setValidators([Validators.required, Validators.email]);

        break;
      default:
    }

    phone?.reset();
    phone?.markAsUntouched();  
    phone?.updateValueAndValidity(); 

    email?.reset();  
    email?.markAsUntouched();  
    email?.updateValueAndValidity(); 


  }

  onSubmit() { 
    console.log(this.signUpForm.value)
    this._router.navigate(['/auth/otp-page'])
  }

}
