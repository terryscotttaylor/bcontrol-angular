import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { LookupService }  from '../lookup.service';
import { Lookup } from '../lookup';

@Component({
  selector: 'app-permission-level-detail',
  templateUrl: './lookup-detail.component.html',
  styleUrls: ['./lookup-detail.component.css']
})
export class LookupDetailComponent implements OnInit {
  lookups$: Observable<Lookup[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LookupService
  ) {}

  ngOnInit() {
    this.lookups$ = this.route.paramMap.pipe(
          switchMap(params => {
            return this.service.getLookups();
          })
    );
    alert(JSON.stringify(this.lookups$));
  }

  gotoLookups(lookup: String) {
    let lookupId = lookup ? lookup : null;
    this.router.navigate(['./admin/lookups', { id: lookupId }]);
  }
}
