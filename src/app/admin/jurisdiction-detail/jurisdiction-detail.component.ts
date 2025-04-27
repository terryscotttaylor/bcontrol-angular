import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { JurisdictionService }  from '../jurisdiction.service';
import { Jurisdiction } from '../jurisdiction';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-permission-name-detail',
  templateUrl: './jurisdiction-detail.component.html',
  styleUrls: ['./jurisdiction-detail.component.css']
})
export class JurisdictionDetailComponent implements OnInit {
  jurisdiction$: Observable<Jurisdiction>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: JurisdictionService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.jurisdiction$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.service.getJurisdiction(params.get('id'))));
  }

  gotoJurisdiction(jurisdiction: number) {
    let jurisdictionId = jurisdiction ? jurisdiction : null;
    this.router.navigate(['./admin/jurisdiction', { name: jurisdiction }]);
  }
}
