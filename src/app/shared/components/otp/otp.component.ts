import { Component, forwardRef, Input, Output, EventEmitter, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgOtpInputConfig, NgOtpInputModule } from "ng-otp-input";

@Component({
  selector: 'nifas-otp',
  standalone: true,
  imports: [NgOtpInputModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OTPComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class OTPComponent implements ControlValueAccessor, OnChanges {
  @Input() otpLength: any;
  @Output() valueChange = new EventEmitter<string>();
  config: NgOtpInputConfig = { disableAutoFocus:true,length: 4, allowNumbersOnly: false, inputStyles: { width: '83px', height: '112px' }, inputClass: 'otp-input radius_xs ph-2 pv-1 mr-0', containerClass: 'gap-6 ltr-otp-input', containerStyles: { 'display': 'flex', 'justify-content': 'space-between' } };
  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['otpLength']?.currentValue)
      this.config.length = changes['otpLength']?.currentValue
  }

  writeValue(value: any): void {

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {

  }

  onOtpChange(event: any) {
    this.onChange(event);
    this.valueChange.emit(event);
  }
}
