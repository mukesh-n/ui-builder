import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { UserRoles, Users } from '../models/users.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _storageService: StorageService,
    private _router: Router
  ) {}
  logout() {
    this._storageService.AuthToken$.next('');
    this._router.navigate(['/login']);
  }
  goToAccessDeniedPage(){
    this._router.navigate(['/access-denied']);
  }
  isLoggedIn() {
    let isLoggedIn = false;
    let authtoken = this._storageService.AuthToken$.value;
    if (authtoken && authtoken.length > 0) {
      isLoggedIn = true;
    }
    return isLoggedIn;
  }
  setUser(user: Users) {
    this._storageService.User$.next(user);
  }
  setAuthToken(token: string) {
    this._storageService.AuthToken$.next(token);
  }
  setRefreshToken(token: string) {
    this._storageService.RefreshToken$.next(token);
  }
  canAccess(roleList: Array<UserRoles>) {
    let allowAccess = false;
    let user = this._storageService.User$.value;
    _.forEach(roleList, (e) => {
      switch (e) {
        case UserRoles.Vendor:
          if (user.isvendor) allowAccess = true;
          break;
        case UserRoles.System:
          if (user.issystem) allowAccess = true;
          break;
        default:
          break;
      }
    });
    return allowAccess;
  }
}
