import { Component, EventEmitter, Input, Output, Self } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'nifas-input',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIcon],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements ControlValueAccessor {

  isPasswordHidden : boolean = true

  @Input('type') type: string = 'text';

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

  public get maxLength(): any {
    return this.controlDirective.control?.errors?.['maxlength']?.requiredLength;
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
}
