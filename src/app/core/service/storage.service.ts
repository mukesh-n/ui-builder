import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Users } from '../models/users.model';
import { JsonUtilService } from '../util/json-util.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public AuthToken$:  BehaviorSubject<string> = new BehaviorSubject<string>('');; 
  public RefreshToken$:  BehaviorSubject<string> = new BehaviorSubject<string>('');; 
  public User$:  BehaviorSubject<Users> = new BehaviorSubject<Users>(new Users());; 
  constructor(private _jsonUtilService: JsonUtilService) {
    this.initUser();
    this.initAuthToken();
    this.initRefreshToken();
  }
  initUser(){
    var userTemp = localStorage.getItem('user');
    if (userTemp) {
      this.User$.next(
        this._jsonUtilService.parse<Users>(userTemp, new Users())
      );
    }
    this.User$.subscribe((v) => {
      localStorage.setItem('user', this._jsonUtilService.stringify(v));
    });
  }
  initAuthToken(){
    var authTokenTemp = localStorage.getItem('authtoken');
    if (authTokenTemp) {
      this.AuthToken$.next(
        authTokenTemp
      );
    }
    this.AuthToken$.subscribe((v) => {
      localStorage.setItem('authtoken', v);
    });
  }
  initRefreshToken(){
    var refreshToken = localStorage.getItem('refreshtoken');
    if (refreshToken) {
      this.RefreshToken$.next(
        refreshToken
      );
    }
    this.RefreshToken$.subscribe((v) => {
      localStorage.setItem('refreshtoken', v);
    });
  }


}
