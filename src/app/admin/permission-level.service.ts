import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { PermissionLevel } from './permission-level';
import { PERMISSIONLEVELS } from './mock-permission-level';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionLevelService {

  private _serviceurl='/user-permissions/permission-levels/';
  
    constructor(private _http: HttpClient) { }
  
    getPermissionLevels(): Observable<String[]> {
      return <Observable<String[]>>this._http.get(environment.baseServiceUrl+this._serviceurl);
    }


  getPermissionLevel(id: string) {
    return this.getPermissionLevels().pipe(
      // (+) before `id` turns the string into a number
      map((permissionlevel: String[]) => permissionlevel.find(permissionlevel => permissionlevel === id))
    );
  }
}

