import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { PermissionLevel } from './permission-level';
import { PERMISSIONLEVELS } from './mock-permission-level';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionLevelService {

  constructor(private messageService: MessageService) { }

  getPermissionLevels(): Observable<PermissionLevel[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('PermissionLevelService: fetched permission levels');
    return of(PERMISSIONLEVELS);
  }

  getPermissionLevel(id: number | string) {
    return this.getPermissionLevels().pipe(
      // (+) before `id` turns the string into a number
      map((permissionlevel: PermissionLevel[]) => permissionlevel.find(permissionlevel => permissionlevel.id === +id))
    );
  }
}

