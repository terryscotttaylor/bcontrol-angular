import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { Lookup } from './lookup';

import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class LookupService {

  private _serviceurl='/lookup/';
  
    constructor(private _http: HttpClient) { }
  
    getLookupTypes(): Observable<String[]> {
      return <Observable<String[]>>this._http.get(environment.baseServiceUrl+this._serviceurl+"lookup-types/");
    }
    
    getLookups(): Observable<Lookup[]> 
    {
      var lookups:Lookup[];
      lookups=[];
      var httpClient = this._http
      var baseUrl = this._serviceurl;
      this.getLookupTypes().forEach( (lookupTypeArray) =>
        lookupTypeArray.forEach( (lookupType) =>
      	   (<Observable<Lookup[]>>httpClient.get(environment.baseServiceUrl+baseUrl+"lookups/1/"+lookupType))
      	   .forEach(
      	
      	       (lookup) => lookup.forEach( (aLookup)=>lookups.push(aLookup))
      	    )
      
      	 )
      	 
      );
      return of(lookups);
   }



  getLookup(id: number | string) {
    return this.getLookups().pipe(
      map((lookup: Lookup[]) => lookup.find(lookup => lookup.id === +id))
    );
  }
  getLookupsByType(lookupType: string): Observable<Lookup[]>{
      alert(JSON.stringify(this.getLookups().subscribe()));
      return null;
  }
}

