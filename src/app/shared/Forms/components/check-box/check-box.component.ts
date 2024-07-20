import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'nifas-check-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './check-box.component.html',
  styleUrl: './check-box.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckBoxComponent),
      multi: true,
    },
  ],
})
export class CheckBoxComponent {

  @Input('fontSize') fontSize : string = '12';
  @Input('label') label !: string;
  @Input() checkboxName !: string;
  @Input('disabled') disabled: boolean = false;
  @Input() value: any = false;
  @Output('change') change = new EventEmitter();

  constructor() {}

  ngAfterViewInit() {}

  ngOnInit() {}

  onChange!: (value: any) => {};

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: () => {}) {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function) {
  }

  ngModelChange(value: any) {
    this.change.emit(value)
    this.onChange(this.value);
  }
}
