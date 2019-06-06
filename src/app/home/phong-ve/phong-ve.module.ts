import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhongVeComponent } from './phong-ve.component';
import { PhongVeRoutingModule } from './phong-ve-routing.module';
import { GheComponent } from './ghe/ghe.component';

@NgModule({
  declarations: [PhongVeComponent, GheComponent],
  imports: [
    CommonModule,
    PhongVeRoutingModule
  ],
  exports: [
    PhongVeComponent,
  ]
})
export class PhongVeModule { }
