import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CaseListComponent }    from './case-list/case-list.component';
import { CaseDetailComponent }  from './case-detail/case-detail.component';

const caseRoutes: Routes = [
  { path: '',  component: CaseListComponent, data: { animation: 'cases' } },
  { path: ':id', component: CaseDetailComponent, data: { animation: 'case' } }
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
