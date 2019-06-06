import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuanLyPhimService {

  constructor(private http: HttpClient) { }


  layDanhSachPhim(): Observable<any>{
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP09`;
    return this.http.get(url).pipe(

      tap(
        // Lấy data thành công
        () => {},
        // Lấy data thất bại
        catchError(err => {
         return this.handleError(err);
        })
      )

    )
  }

  layChiTietPhim(maPhim): Observable<any>{
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`;
    return this.http.get(url).pipe(
      tap(
        // Lấy data thành ông
        () => {},
        // Lấy data thất bại
        catchError(err => {
         return this.handleError(err);
        })
      )

    )
  }

  chiTietPhongVe(maLichChieu): Observable<any> {
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`;
    return this.http.get(url).pipe(
      tap(
        // Lấy data thành ông
        () => {},
        // Lấy data thất bại
        catchError(err => {
         return this.handleError(err);
        })
      )

    )
  }

  handleError(err){
    return err;
  }
}
