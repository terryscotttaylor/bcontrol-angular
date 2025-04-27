import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CaseSearchWidgetListComponent }    from './case-search-widget-list/case-search-widget-list.component';
import { CaseSearchWidgetDetailComponent }  from './case-search-widget-detail/case-search-widget-detail.component';

const caseRoutes: Routes = [
  { path: '',  component: CaseSearchWidgetListComponent, data: { animation: 'cases' } },
  { path: ':id', component: CaseSearchWidgetDetailComponent, data: { animation: 'case' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(caseRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CaseRoutingModule { }
