import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
const httpOptions = { 
  headers: new HttpHeaders({
    "Content-type": "application/json"
  })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  registerUser( user: any): Observable<any> {
    const url = 'http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung';

    return this.http.post(url, user, httpOptions).pipe(
      tap(
        () => {
          console.log("Huy");
        },

        catchError (err => {
          return this.handleError(err);
        })
      )
    )
  }

  loginUser(TaiKhoan: any, MatKhau: any): Observable <any> {
    const url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?TaiKhoan=${TaiKhoan}&MatKhau=${MatKhau}`;
    
    return this.http.post(url, httpOptions).pipe(
      tap(
        () => {},

        catchError (err => {
          return this.handleError(err);
        })
      )
    )
  }
  
  handleError(err){
    return err;
  }

 
}
