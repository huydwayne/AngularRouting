import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router"
@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input () objPhim;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  muaVe(){
    this.router.navigate(["/home/chi-tiet-phim/", this.objPhim.MaPhim], {queryParams: {tenPhim: this.objPhim.TenPhim}});
  }
}
