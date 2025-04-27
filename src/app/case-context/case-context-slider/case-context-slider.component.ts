import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CaseContextService }  from '../case-context.service';
import { CaseContext } from '../case-context';

@Component({
  selector: 'case-context-slider',
  templateUrl: './case-context-slider.component.html',
  styleUrls: ['./case-context-slider.component.css']
})
export class CaseContextSliderComponent implements OnInit {
  context$: Observable<CaseContext>;
  
  constructor(
    private service: CaseContextService
  ) {}

  ngOnInit() {
    this.context$ = this.service.getCaseContext();
  }
}