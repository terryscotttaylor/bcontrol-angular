// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JurisdictionService }  from '../jurisdiction.service';
import { Jurisdiction } from '../jurisdiction';

@Component({
  selector: 'app-jurisdiction-list',
  templateUrl: './jurisdiction-list.component.html',
  styleUrls: ['./jurisdiction-list.component.css']
})
export class JurisdictionListComponent implements OnInit {
  jurisdiction$: Observable<Jurisdiction[]>
  selectedId: number;

  constructor(
    private service: JurisdictionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.jurisdiction$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getJurisdictions();
      })
    );
  }
}
