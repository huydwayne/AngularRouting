import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input () objGhe;
  @Output () eventGhe = new EventEmitter;
  trangThaiChon = false;

  constructor() { }

  ngOnInit() {
  }
  
  chonGhe(){
    this.trangThaiChon = !this.trangThaiChon;
    let ghe = {
      item: this.objGhe,
      trangThai: this.trangThaiChon
    }
    this.eventGhe.emit(ghe);
  }
}
