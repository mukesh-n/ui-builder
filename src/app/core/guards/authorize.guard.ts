import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRoles } from '../models/users.model';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeGuard {
  constructor(private _authservice: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    var canActivate = false;
    let roleList: Array<UserRoles> | null = route.data['roleList'];
    if (roleList) {
      canActivate = this._authservice.canAccess(roleList);
    } else {
      canActivate = true;
    }
    if (canActivate == false) {
      this._authservice.goToAccessDeniedPage();
    }
    return canActivate;
  }
}
