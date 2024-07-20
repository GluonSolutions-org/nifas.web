import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../../../../core/components/base.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Location } from '@angular/common';

@Component({
  selector: 'nifas-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.scss','../../styles/auth-shared.component.scss']
})
export class OtpPageComponent extends BaseComponent{

  otpForm: FormGroup = new FormGroup(
  {
    otp: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
  })

  constructor(injector: Injector, private location: Location) {
    super(injector);
  }

  ngSuperOnInit() { };

  ngSuperAfterViewInit() {};

  ngSuperOnDestroy() { }


  onSubmit() { 
    console.log(this.otpForm.value)
    this._router.navigate(['/auth/sign-up-last-step'])
  }

  back() {
    this.location.back();
  }

}
