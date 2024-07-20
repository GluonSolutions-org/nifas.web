import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CheckBoxComponent } from '../check-box/check-box.component';
 
@Component({
  selector: 'nifas-toggle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true,
    },
  ],
})
export class ToggleComponent extends CheckBoxComponent {
  @Input('startLabel') startLabel !: string;
  @Input('endLabel') endLabel !: string;
}
