// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LookupService }  from '../lookup.service';

@Component({
  selector: 'app-permission-level-list',
  templateUrl: './lookup-list.component.html',
  styleUrls: ['./lookup-list.component.css']
})
export class LookupListComponent implements OnInit {
  lookupTypes$: Observable<String[]>;
  selectedId: number;

  constructor(
    private service: LookupService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.lookupTypes$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getLookupTypes();
      })
    );
  }
}
