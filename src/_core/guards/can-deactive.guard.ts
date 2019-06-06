import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DangKyComponent } from 'src/app/home/form/dang-ky/dang-ky.component';
import { DangNhapComponent } from 'src/app/home/form/dang-nhap/dang-nhap.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactiveGuard implements CanDeactivate<DangKyComponent> {

  canDeactivate(component) {
      return component.canDeactivate() || confirm("Bạn có muốn rời khỏi trang không?")
    }
  }

export class CanDeactiveDangNhapGuard implements CanDeactivate<DangNhapComponent> {
  
  canDeactivate(component){
    
    return (
      component.canDeactivate() || confirm("Bạn có muốn rời khỏi trang không?")
    )
  }
}
