import { Component, ElementRef, Input, ViewChild, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 's-check-box',
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

  @Input('label') label !: string;

  @Input() checkboxName!: string;

  @Input('disabled') disabled: boolean = false;

  @Input() value: any = null;

  @ViewChild('checkbox') checkbox !: ElementRef;

  constructor() {
  }

  ngAfterViewInit() { }

  ngOnInit() {}

  onChange!: (value: any) => {};

  writeValue(value: any) {
    this.value = value;
    if (this.checkbox?.nativeElement) {
      this.checkbox.nativeElement.checked = value
    }
  }

  registerOnChange(fn: () => {}) {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function) {
  }

  ngModelChange(value: any) {

    if (this.checkbox?.nativeElement) {
      this.value = this.checkbox.nativeElement.checked
    }

    this.onChange(this.value);

  }

}
