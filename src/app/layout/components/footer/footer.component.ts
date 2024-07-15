import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../../../core/components/base.component';
import { MessagingService } from '../../../core/services/messaging.service';
import { MatIcon } from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'nifas-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, MatIcon]
})
export class FooterComponent  extends BaseComponent {

  form !: FormGroup;

  constructor(injector: Injector, public messagingService : MessagingService,private fb: FormBuilder) {
    super(injector);

    this.form = this.fb.group({
      email: ['']
    });
  }

  ngSuperOnInit() { };

  ngSuperAfterViewInit() { };

  ngSuperOnDestroy() { }

  onSubmit() {
    console.log(this.form.value);
  }
}

