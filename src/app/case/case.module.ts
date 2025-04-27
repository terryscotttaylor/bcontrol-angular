import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CaseListComponent }    from './case-list/case-list.component';
import { CaseDetailComponent }  from './case-detail/case-detail.component';

import { CaseRoutingModule } from './case-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CaseRoutingModule
  ],
  declarations: [
    CaseListComponent,
    CaseDetailComponent,
    CaseListComponent
  ]
})
export class CaseModule {}
