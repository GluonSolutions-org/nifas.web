import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormModule } from './Forms/form.module';
import { MatTooltip } from '@angular/material/tooltip';
import { ButtonModule } from 'primeng/button';

export const modules: any = [
  FormsModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  FormModule,
  MatTooltip,
  ButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules,
  ],
  exports: [
    ...modules,
  ],
  providers: []

})

export class SharedModule { }
