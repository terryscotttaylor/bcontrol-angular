import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { Jurisdiction } from './jurisdiction';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class JurisdictionService {


  private _serviceurl= '/jurisdiction/';

  constructor(private _http: HttpClient) { }

  getJurisdictions(): Observable<Jurisdiction[]> {
    return <Observable<Jurisdiction[]>>this._http.get(environment.baseServiceUrl+this._serviceurl);
  }

  getJurisdiction(id: number | string) {
  alert(JSON.stringify(this.getJurisdictions()));
    
    return this.getJurisdictions().pipe(
      map((jurisdiction: Jurisdiction[]) => jurisdiction.find(jurisdiction => jurisdiction.jurisdictionId === +id))
    );
  }
}

