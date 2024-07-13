import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleComponent } from './toggle/toggle.component';
import { CheckBoxComponent } from './check-box/check-box.component';


const modules = [
  CheckBoxComponent,
  ToggleComponent,
  ReactiveFormsModule
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
