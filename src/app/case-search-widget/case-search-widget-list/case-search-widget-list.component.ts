// TODO: Feature Componetized like CrisisCenter
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CaseSearchWidgetService }  from '../case-search-widget.service';
import { CaseSearchResult } from '../case-search-result';
import { CASE_SEARCH_RESULTS } from '../mock-case-search-result'

@Component({
  selector: 'case-search-widget',
  templateUrl: './case-search-widget-list.component.html',
  styleUrls: ['./case-search-widget-list.component.css']
})
export class CaseSearchWidgetListComponent implements OnInit {
  caseSearchResult$: Observable<CaseSearchResult[]>;
  lastViewedCases$: Observable<CaseSearchResult[]>;
  
  constructor(
    private service: CaseSearchWidgetService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.caseSearchResult$ = of(CASE_SEARCH_RESULTS);
  }
}
