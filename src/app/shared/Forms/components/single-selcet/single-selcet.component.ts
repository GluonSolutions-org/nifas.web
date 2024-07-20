import { Component, EventEmitter, Input, Output, Self, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { inputType } from '../../types/input.type'
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'nifas-single-selcet',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, FloatLabelModule,],
  templateUrl: './single-selcet.component.html',
  styleUrl: './single-selcet.component.scss'
})
export class SingleSelcetComponent implements ControlValueAccessor {

  selectedValue : any
 
  @Input() data !: any[];

  @Input('showFilter') showFilter : boolean = true;
  @Input('showClear') showClear : boolean = true;

  @Input('disabled') disabled: boolean = false;
  @Input('label') label !: string;
  @Input('placeholder') placeholder !: string;

  @ViewChild('dropdown') dropdown!: Dropdown;

  constructor(@Self() public controlDirective: NgControl) {
    controlDirective.valueAccessor = this;
  }

  onChange!: (value: any) => {};
  onTouched!: (value: any) => {};

  writeValue(value: any) {
    this.selectedValue = this.data.filter((item) => item.id == value )[0];
  }

  registerOnChange(fn: () => {}) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}) {
    this.onTouched = fn;
  }

  ngModelChange() {
    if(this.selectedValue) {
      this.onChange(this.selectedValue['id']);
    } 
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

  ngOnInit() {}

  onDropdownHide() {
    if (this.dropdown) {
      this.dropdown.filterValue = ''; 
      this.dropdown.resetFilter(); 
    }
  }

  onDropdownClear() {
    this.onChange(null);
  }

  onBlur(): void {
    this.controlDirective.control?.markAllAsTouched();
  }

}
