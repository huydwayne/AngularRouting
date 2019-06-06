import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { UserService } from 'src/_core/services/user.service';
import { DataService } from 'src/_core/services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {
  public alert = "";
  public trangThai = false;
  constructor( private userService : UserService, private dataService : DataService) { }
  @ViewChild ("formDangNhap") formDangNhap: NgForm;

  ngOnInit() {
  }
  @HostListener("window:beforeunload", ["$event"])

  CanDeactivate($event): boolean {
    return this.formDangNhap.submitted || !this.formDangNhap.dirty; 
  }

  DangNhap (value) {
    console.log(value);

    const uri =  `QuanLyNguoiDung/DangNhap?TaiKhoan=${value.taiKhoan}&MatKhau=${value.matKhau}`;
    // this.userService.loginUser(value.taiKhoan, value.matKhau).subscribe( (data: any ) => {
    //   console.log(data);
    //   if (data === "Tài khoản hoặc mật khẩu không đúng !"){
    //     this.alert = data;
    //   } else {
    //     this.alert = " Đăng nhập thành công !";
    //   }
    // })
    this.dataService.post(uri).subscribe( (data: any ) => {
      console.log(data);
        if (data === "Tài khoản hoặc mật khẩu không đúng !"){
          this.alert = data;
          this.trangThai = false;
        } else {
          localStorage.setItem("user", JSON.stringify(data) );
          this.alert = " Đăng nhập thành công !";
          this.trangThai = true;
        }
    })
  }
}
