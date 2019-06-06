import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuanLyPhimService } from "./../../../_core/services/quan-ly-phim.service"
import { GheComponent } from './ghe/ghe.component';
import { DataService } from 'src/_core/services/data.service';
@Component({
  selector: 'app-phong-ve',
  templateUrl: './phong-ve.component.html',
  styleUrls: ['./phong-ve.component.scss']
})
export class PhongVeComponent implements OnInit {
  @ViewChildren (GheComponent) listGhe : QueryList <GheComponent>;
  public maLichChieu: any;
  public danhSachGhe: any;
  constructor( private activatedRoute: ActivatedRoute, private quanLyPhimService: QuanLyPhimService, private dataService: DataService) { }
  danhSachGheDaDat = [];
  ngOnInit() {
    this.getParams();
    this.getChiTietPhongVe();
  }

  getParams(){
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get("maLichChieu");
    console.log(this.maLichChieu);
  }

  getChiTietPhongVe(){
    // this.quanLyPhimService.chiTietPhongVe(this.maLichChieu).subscribe((data: any) => {
    //   console.log(data);
    //   this.danhSachGhe = data.DanhSachGhe;
    //   console.log(this.danhSachGhe);
    // })
    const uri = `QuanLyPhim/ChiTietPhongVe?MaLichChieu=${this.maLichChieu}`
    this.dataService.get(uri).subscribe((data: any) => {
      console.log(data);
      this.danhSachGhe = data.DanhSachGhe;
      console.log(this.danhSachGhe);
    })
  }

  datGhe(itemGhe){
    console.log(itemGhe);
    if (itemGhe.trangThai) {
      this.danhSachGheDaDat.push(itemGhe);
    } 
    else ( this.danhSachGheDaDat.map( (item, stt)  => {
      // console.log(item , stt);
      let ghe = item.item;
      console.log(ghe);
      if (ghe.MaGhe === itemGhe.item.MaGhe) {
        console.log(ghe.MaGhe, itemGhe.item.MaGhe);
        this.danhSachGheDaDat.splice(stt,1);
      }
    }))
  }

  cancel(objGhe, soGhe){
      // console.log(this.listGhe);
      
      this.listGhe.map ( item => {
        if (objGhe.item.MaGhe === item.objGhe.MaGhe) {
          item.trangThaiChon = false;
          this.danhSachGheDaDat.splice(soGhe,1);
        }
      })
        
        
    
  }
}
