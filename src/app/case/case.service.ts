import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import {CaseContextService} from '../case-context/case-context.service';
import { Case } from './case';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CaseService {

  constructor(private messageService: MessageService, 
              private caseContextService: CaseContextService) 
  { 
  
  }
/*
  getCases(): Observable<Case[]> {
    this.messageService.add('CaseService: fetched permission levels');
    return of(CASES);
  }

  getCase(id: number | string ) {
    return this.getCases().pipe(
        map( (aCase: Case[]) => aCase.find(aCase => aCase.id === +id) )
    );
  }
  */
}