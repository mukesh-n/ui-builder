
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActionReq } from '../../core/models/actionreq.model';
import { ActionRes } from '../models/actionres.model';
import {
  Users,
  UsersDeleteReqDto,
  UsersGetOtpReq,
  UsersSelectReqDto,
  UsersValidateOtpReq,
  UsersValidateOtpRes,
} from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  _baseUrl: string;
  constructor(private http: HttpClient) {
    this._baseUrl = environment.baseUrl + '/api/Users';
  }
  async select(req: UsersSelectReqDto): Promise<Array<Users>> {
    var result: Array<Users> = [];
    try {
      var postData: ActionReq<UsersSelectReqDto> =
        new ActionReq<UsersSelectReqDto>();
      postData.item = req;
      var resp = await firstValueFrom(
        this.http.post<ActionRes<Array<Users>>>(
          this._baseUrl + '/Select',
          postData
        )
      );
      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }

  async insert(req: Users): Promise<Users> {
    var result: Users = new Users();
    try {
      var postData: ActionReq<Users> = new ActionReq<Users>();
      postData.item = req;
      var resp = await firstValueFrom(
        this.http.post<ActionRes<Users>>(this._baseUrl + '/Insert', postData)
      );

      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }

  async signUp(req: Users): Promise<Users> {
    var result: Users = new Users();
    try {
      var postData: ActionReq<Users> = new ActionReq<Users>();
      postData.item = req;
      var resp = await firstValueFrom(
        this.http.post<ActionRes<Users>>(this._baseUrl + '/Signup', postData)
      );

      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }



  async update(req: Users): Promise<Users> {
    var result: Users = new Users();
    try {
      var postData: ActionReq<Users> = new ActionReq<Users>();
      postData.item = req;
      var resp = await firstValueFrom(this.http
        .post<ActionRes<Users>>(this._baseUrl + '/Update', postData))
      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async delete(req: UsersDeleteReqDto): Promise<boolean> {
    var result: boolean = false;
    try {
      var postData: ActionReq<UsersDeleteReqDto> = new ActionReq<UsersDeleteReqDto>();
      postData.item = req;
      var resp = await firstValueFrom(await this.http
        .post<ActionRes<boolean>>(this._baseUrl + '/Delete', postData))
        
      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async getOtp(req: UsersGetOtpReq): Promise<number> {
    var result: number = 0;
    try {
      var postData: ActionReq<UsersGetOtpReq> = new ActionReq<UsersGetOtpReq>();
      postData.item = req;
      var resp = await firstValueFrom(await this.http
        .post<ActionRes<number>>(this._baseUrl + '/GetOtp', postData))
        
      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async validateOtp(req: UsersValidateOtpReq): Promise<UsersValidateOtpRes> {
    var result: UsersValidateOtpRes = new UsersValidateOtpRes();
    try {
      var postData: ActionReq<UsersValidateOtpReq> = new ActionReq<UsersValidateOtpReq>();
      postData.item = req;
      var resp = await firstValueFrom(await this.http
        .post<ActionRes<UsersValidateOtpRes>>(this._baseUrl + '/validateOtp', postData))
        
      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
}
