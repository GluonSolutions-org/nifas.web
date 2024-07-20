import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { SingleSelcetComponent } from './components/single-selcet/single-selcet.component';

const modules = [
  ReactiveFormsModule,
  InputComponent,
  CheckBoxComponent,
  ToggleComponent,
  SingleSelcetComponent
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ...modules,
  ],
  exports: [
    ...modules
  ]
})
export class FormModule { }
