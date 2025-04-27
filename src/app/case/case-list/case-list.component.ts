// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CaseSummaryService }  from '../case.summary.service';
import { CaseSummary } from '../case-summary';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css']
})
export class CaseListComponent implements OnInit {
  caseSummaries$: Observable<CaseSummary[]>;
  selectedId: number;

  constructor(
    private service: CaseSummaryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.caseSummaries$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getCaseSummaries();
      })
    );
  }
}
