import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import {CaseContextService} from '../case-context/case-context.service';
import { CaseSearchResult } from './case-search-result';
import { Case } from '../case/case';
import { CASE_SEARCH_RESULTS } from './mock-case-search-result';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CaseSearchWidgetService {

  constructor(private messageService: MessageService, 
              private caseContextService: CaseContextService) 
  { 
  
  }

  getCases(): Observable<CaseSearchResult[]> {
    this.messageService.add('CaseService: fetched permission levels');
    return of(CASE_SEARCH_RESULTS);
  }

  getCase(id: number | string ) {
    alert('a case -  - has been selected');
  }
}