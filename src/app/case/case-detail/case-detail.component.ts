import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { CaseSummaryService }  from '../case.summary.service';
import { CaseSummary } from '../case-summary';
import { JurisdictionService }  from '../../admin/jurisdiction.service';
import { Jurisdiction } from '../../admin/jurisdiction';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.css']
})
export class CaseDetailComponent implements OnInit {
  caseSummary$: Observable<CaseSummary>;
  jurisdiction$: Observable<Jurisdiction>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CaseSummaryService,
    private jurisdictionService: JurisdictionService
  ) {}

  ngOnInit() {
    this.caseSummary$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCaseSummary(params.get('id')))
    );
    //alert('case  summary '+this.caseSummary$.id);
    //this.jurisdiction$ = this.jurisdictionService.getJurisdiction(1002);
    //alert(JSON.stringify(this.jurisdiction$));
  }

  gotoCases(aCase: CaseSummary) {
    let caseId = aCase ? aCase.id : null;
    this.router.navigate(['/case-summary', { id: caseId }]);
  }
}
