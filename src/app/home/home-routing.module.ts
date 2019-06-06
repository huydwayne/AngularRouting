import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { ChiTietPhimComponent } from './danh-sach-phim/chi-tiet-phim/chi-tiet-phim.component';
import { AuthenGuard } from './../../_core/guards/authen.guard';

const routes: Routes = [
  // Home
  {path: "", component: HomeComponent, children: [
    //Trang Chủ
    {path: "", component: TrangChuComponent},
    {path: "trang-chu", component: TrangChuComponent},

    // Trang Tin Tức
    {path: "tin-tuc", component: TinTucComponent},

    //Trang chi tiết phim
    // Truyền 1 tham số
    {path: "chi-tiet-phim/:id", component: ChiTietPhimComponent},

    // Truyền nhiều tham số
    // {path: "chi-tiet-phim", component: ChiTietPhimComponent},

    //Trang Danh Sách Phim
    {path: "danh-sach-phim", component: DanhSachPhimComponent, 
    canActivate: [AuthenGuard]
    },


    // Phòng vé
    {path: "phong-ve/:maLichChieu", loadChildren: "./phong-ve/phong-ve.module#PhongVeModule"},

    // Trang Form
    {path: "form", loadChildren: "./form/form.module#FormModule"},
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
