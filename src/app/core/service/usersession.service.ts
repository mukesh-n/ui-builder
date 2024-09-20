
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActionReq } from '../../core/models/actionreq.model';
import { ActionRes } from '../models/actionres.model';
import {
  UserSession,
  UserSessionDeleteReqDto,
  UserSessionSelectReqDto,
} from '../models/usersession.model';

@Injectable({
  providedIn: 'root',
})
export class UserSessionService {
  _baseUrl: string;
  constructor(private http: HttpClient) {
    this._baseUrl = environment.baseUrl + '/api/UserSession';
  }
  async select(req: UserSessionSelectReqDto): Promise<Array<UserSession>> {
    var result: Array<UserSession> = [];
    try {
      var postData: ActionReq<UserSessionSelectReqDto> =
        new ActionReq<UserSessionSelectReqDto>();
      postData.item = req;
      var resp = await firstValueFrom(
        this.http.post<ActionRes<Array<UserSession>>>(
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
  async insert(req: UserSession): Promise<UserSession> {
    var result: UserSession = new UserSession();
    try {
      var postData: ActionReq<UserSession> = new ActionReq<UserSession>();
      postData.item = req;
      var resp = await firstValueFrom(
        this.http.post<ActionRes<UserSession>>(this._baseUrl + '/Insert', postData)
      );

      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async update(req: UserSession): Promise<UserSession> {
    var result: UserSession = new UserSession();
    try {
      var postData: ActionReq<UserSession> = new ActionReq<UserSession>();
      postData.item = req;
      var resp = await firstValueFrom(this.http
        .post<ActionRes<UserSession>>(this._baseUrl + '/Update', postData))
      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async delete(req: UserSessionDeleteReqDto): Promise<boolean> {
    var result: boolean = false;
    try {
      var postData: ActionReq<UserSessionDeleteReqDto> = new ActionReq<UserSessionDeleteReqDto>();
      postData.item = req;
      var resp = await firstValueFrom(await this.http
        .post<ActionRes<boolean>>(this._baseUrl + '/Delete', postData))
        
      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
}
