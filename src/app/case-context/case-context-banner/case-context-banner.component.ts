import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { CaseContextService }  from '../case-context.service';
import { CaseContext } from '../case-context';

@Component({
  selector: 'case-context-banner',
  templateUrl: './case-context-banner.component.html',
  styleUrls: ['./case-context-banner.component.css']
})
export class CaseContextBannerComponent implements OnInit {
  context$: Observable<CaseContext>;
  
  constructor(
    private service: CaseContextService
  ) {}

  ngOnInit() {
    this.context$ = this.service.getCaseContext();
  }
}
