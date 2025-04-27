import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { CaseContext } from './case-context';
import { CASECONTEXT } from './mock-case-context';

@Injectable({
  providedIn: 'root',
})
export class CaseContextService {

   caseContext$ : Observable<CaseContext>;

  constructor() {
   this.caseContext$ = of(CASECONTEXT);
  }

  getCaseContext(): Observable<CaseContext> {
    return this.caseContext$;
  }

  setCaseContext(context: CaseContext) {
    this.caseContext$ = of(context);
  }
}

