import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const modules = [
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
