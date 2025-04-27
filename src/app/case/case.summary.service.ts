import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import {CaseContextService} from '../case-context/case-context.service';
import { CaseSummary } from './case-summary';
import { CASE_SUMMARIES } from './mock-case-summary';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CaseSummaryService {

  constructor(private messageService: MessageService, 
              private caseContextService: CaseContextService) 
  { 
  
  }

  getCaseSummaries(): Observable<CaseSummary[]> {
    //this.messageService.add('CaseService: fetched permission levels');
    return of(CASE_SUMMARIES);
  }

  getCaseSummary(id: number | string ) {
    return this.getCaseSummaries().pipe(
        map( (aCase: CaseSummary[]) => aCase.find(aCase => aCase.id === +id) )
    );
  }
}