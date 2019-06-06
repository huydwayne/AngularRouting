import { Component, OnInit } from '@angular/core';
import { QuanLyPhimService } from './../../../../_core/services/quan-ly-phim.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from './../../../../_core/services/data.service';
@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit {
  public maPhim: any;
  public tenPhim: any;
  public phim: any;
  constructor( private quanLyPhimService: QuanLyPhimService,private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.getParams();
    this.layChiTietPhim();
  }
   
  layChiTietPhim() {
    // this.quanLyPhimService.layChiTietPhim(this.maPhim).subscribe((data:any) => {
    //   console.log(data);
    //   this.phim = data;
    // });
    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.maPhim}`;
    this.dataService.get(uri).subscribe((data: any) => {
      this.phim = data;
    })
  }
  getParams(){
    // Nhận 1 tham số
    this.maPhim = this.activatedRoute.snapshot.paramMap.get("id");

    // Nhận nhiều tham số
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.tenPhim = params.tenPhim;
    })
  }

  muaVe(maLichChieu){
    console.log(maLichChieu);
    this.router.navigate(["/home/phong-ve/", maLichChieu])
  }
}
