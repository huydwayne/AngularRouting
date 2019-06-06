import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { FormComponent } from './form.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { CanDeactiveGuard, CanDeactiveDangNhapGuard } from 'src/_core/guards/can-deactive.guard';


const routes: Routes = [


{path: "", component: FormComponent, children: [
  //Đăng ký
  {path: "", component: DangKyComponent},

  {path: "dang-ky", component: DangKyComponent,
  canDeactivate: [CanDeactiveGuard]
  },
//   Đăng nhập
    {path: "dang-nhap", component: DangNhapComponent,
    canDeactivate: [CanDeactiveDangNhapGuard]
  }
]}

    

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanDeactiveGuard, CanDeactiveDangNhapGuard]
})
export class FormRoutingModule { }
