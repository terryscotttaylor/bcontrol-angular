import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { CaseSearchWidgetService }  from '../case-search-widget.service';
import { CaseSearchResult } from '../case-search-result';
import { JurisdictionService }  from '../../admin/jurisdiction.service';
import { Jurisdiction } from '../../admin/jurisdiction';
import { Case } from '../../case/case';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-search-widget-detail.component.html',
  styleUrls: ['./case-search-widget-detail.component.css']
})
export class CaseSearchWidgetDetailComponent implements OnInit {
  caseSearchResult$: Observable<CaseSearchResult>;
  jurisdiction$: Observable<Jurisdiction>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CaseSearchWidgetService,
    private jurisdictionService: JurisdictionService
  ) {}

  ngOnInit() {
    //this.case$ = this.route.paramMap.pipe(
    //  switchMap((params: ParamMap) =>
    //    this.service.getCase(params.get('id')))
    //);
    //alert('case jurisdiction is '+this.case$.jurisdictionId);
    //this.jurisdiction$ = this.jurisdictionService.getJurisdiction(1002);
    //alert(JSON.stringify(this.jurisdiction$));
    
  }

  gotoCases(aCase: Case) {
    let caseId = aCase ? aCase.id : null;
    this.router.navigate(['/case', { id: caseId }]);
  }
}
