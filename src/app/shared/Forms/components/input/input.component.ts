import { Component, EventEmitter, Input, Output, Self } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { inputType } from '../../types/input.type'

@Component({
  selector: 'nifas-input',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIcon],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements ControlValueAccessor {

  isPasswordHidden : boolean = true

  @Input('type') type: inputType = 'text';

  @Input('disabled') disabled: boolean = false;
  @Input('label') label !: string;
  @Input('placeholder') placeholder: string = '';
  

  @Output() onEndIconClick = new EventEmitter();
  @Output('change') change: EventEmitter<string> = new EventEmitter<string>();

  constructor(@Self() public controlDirective: NgControl) {
    controlDirective.valueAccessor = this;
  }

  text: string = "";

  onChange!: (value: any) => {};
  onTouched!: (value: any) => {};

  writeValue(value: any) {
    this.text = value;
  }

  registerOnChange(fn: () => {}) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}) {
    this.onTouched = fn;
  }

  ngModelChange() {
    this.change.emit(this.text);
    this.onChange(this.text);
  }

  public get errors(): any {
    return this.controlDirective.control?.errors;
  }
 
  public get invalid(): boolean {
    return this.controlDirective.control ? this.controlDirective.control.invalid : false;
  }

  public get isRequired(): boolean {
    const control = this.controlDirective?.control as any;
    return control?._rawValidators?.some?.(({ name }: Function) => name == "required");
  }

  public get isTouched(): boolean {
    return this.controlDirective.control?.touched as boolean;
  }

  ngAfterViewInit() { }

  ngOnInit() { }

  endIconClick() {
    this.onEndIconClick.emit()
  }

  onBlur(): void {
    this.controlDirective.control?.markAllAsTouched();
  }

  showPassword() {
    this.isPasswordHidden = !this.isPasswordHidden
  }

  formatPhoneNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); 

    // Format as XX XXX XXXX
    if (value.length > 2 && value.length <= 5) {
      value = `${value.slice(0, 2)} ${value.slice(2)}`;
    } else if (value.length > 5) {
      value = `${value.slice(0, 2)} ${value.slice(2, 5)} ${value.slice(5, 9)}`;
    }

    input.value = value;
  }
}
