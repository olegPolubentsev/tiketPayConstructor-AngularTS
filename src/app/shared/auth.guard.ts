import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot
} from "@angular/router";

import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable({providedIn: "root"})
export class AuthGuard implements CanActivate, CanActivateChild{

  constructor(
    private roth: AuthService,
    private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    // return this.roth.isAuthenticated().then(isAuth => {
    //   if(isAuth){
    //     return true
    //   } else //return false
    //   {
    //     this.router.navigate(['/login'], {
    //       queryParams: {auth: false}
    //     })
    //     return false
    //   }
    // })
    return false
  }
  canActivateChild( //все тоже самое, только если мы хотим применять это к дочерним ротингам
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state) //вызываем верхнее если хотим тоже самое или пишим свое тут
  }
}
