import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../../../../core/components/base.component';
import { ITabs } from '../../../../shared/interfaces/tabs.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationTabsEnum } from '../../enums/registration-tab.enum';


@Component({
  selector: 'nifas-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss','../../styles/auth-shared.component.scss']
})
export class LogInComponent extends BaseComponent{

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

  loginForm: FormGroup = new FormGroup(
  {
    phone: new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
    email: new FormControl('',[]),
    password: new FormControl('',[Validators.required]),
  })

  constructor(injector: Injector) {
    super(injector);
  }

  ngSuperOnInit() { };

  ngSuperAfterViewInit() {};

  ngSuperOnDestroy() { }

  onSelectTab(id: any) {
    this.selctedTab = id

    const email = this.loginForm.get('email');
    const phone = this.loginForm.get('phone');

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
    console.log(this.loginForm.value)
  }

}
