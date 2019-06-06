import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router"
@Injectable({
  providedIn: 'root'
})
export class AuthenGuard implements CanActivate  {
    constructor(private router: Router) {}

    canActivate(){
      if ( JSON.parse(localStorage.getItem("user")) ) {
        // console.log(localStorage.getItem("user"));
        return true;
        
      } 

      this.router.navigate(["home/form/dang-nhap"]);
      return false;
    }
}
