import { Component, OnInit } from '@angular/core';
import { PhimService } from './../../../_core/services/phim.service';
import { QuanLyPhimService } from './../../../_core/services/quan-ly-phim.service';
import { DataService } from './../../../_core/services/data.service';
@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {
  danhSachPhim = [];
  constructor(private phimService: PhimService, private quanLyPhimService: QuanLyPhimService, private dataService: DataService) { }

  ngOnInit() {
    this.getDanhSachPhim();
  }

  getDanhSachPhim(){
    // // this.danhSachPhim = this.phimService.layDanhSachPhim();

    // // Lấy dữ liệu từ BackEnd
    // this.quanLyPhimService.layDanhSachPhim().subscribe((data: any) => {
    //   console.log(data);
    //   this.danhSachPhim = data;
    // });
    const uri = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP09";
    this.dataService.get(uri).subscribe( (data: any) => {
      this.danhSachPhim = data;
    })
  } 

}
