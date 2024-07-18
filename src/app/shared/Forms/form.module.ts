import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';

const modules = [
  ReactiveFormsModule,
  InputComponent
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
