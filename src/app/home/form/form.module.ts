import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';
import { FormsModule } from "@angular/forms"
// import { MaterialModule } from './../../../_core/share/material.module';

@NgModule({
  declarations: [DangKyComponent, DangNhapComponent, FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    // MaterialModule
  ]
})
export class FormModule { }
