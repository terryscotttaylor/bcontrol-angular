import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { PermissionName } from './permission-name';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionNameService {

  private _serviceurl='/user-permissions/permission-names/';

  constructor(private _http: HttpClient) { }

  getPermissionNames(): Observable<String[]> {
    return <Observable<String[]>>this._http.get(environment.baseServiceUrl+this._serviceurl);
  }

  getPermissionName(name: string) {
    return this.getPermissionNames().pipe(
      map((permissionname: String[]) => permissionname.find(permissionname => permissionname === name))
    );
  }
}

