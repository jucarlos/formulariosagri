import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectoresRoutingModule } from './selectores-routing.module';
import { SelectoresComponent } from './pages/selectores/selectores.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SelectoresComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectoresRoutingModule
  ]
})
export class SelectoresModule { }
