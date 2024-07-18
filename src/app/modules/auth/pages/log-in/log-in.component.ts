import { Component, Inject, Injector } from '@angular/core';
import { BaseComponent } from '../../../../core/components/base.component';
import { ITabs } from '../../../../shared/interfaces/tabs.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'nifas-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss','../../styles/auth-shared.component.scss']
})
export class LogInComponent extends BaseComponent{

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
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  })

  constructor(injector: Injector) {
    super(injector);
  }

  ngSuperOnInit() { };

  ngSuperAfterViewInit() {};

  ngSuperOnDestroy() { }

  onSelectTab(id: any) {
    console.log(id)
  }

  onSubmit() { 
    console.log(this.loginForm.value)
  }

}
