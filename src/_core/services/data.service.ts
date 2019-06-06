import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
let Api = ""; // Add thêm dòng urlApi vào Environment.ts ở src -> environment

const httpOptions = { 
  headers: new HttpHeaders({
    "Content-type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
    Api = environment.urlApi;
  }

  get(uri: string): Observable<any>{
    return this.http.get(Api + "/" + uri).pipe(
      tap(
        // Lấy data thành công
        () => {
          // Dùng để define loading screen nếu dữ liệu chưa lấy về

          //Define toast thông báo khi đăng ký thành công
        },
        // Lấy data thất bại
        catchError(err => {
         return this.handleError(err);
        })
      )

    )
  }

  post(uri: string, data?: Object): Observable <any>{
    return this.http.post(Api + "/" + uri, data, httpOptions ).pipe(
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
