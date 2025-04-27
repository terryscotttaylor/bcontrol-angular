import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CaseSearchWidgetListComponent }    from './case-search-widget-list/case-search-widget-list.component';
import { CaseSearchWidgetDetailComponent }  from './case-search-widget-detail/case-search-widget-detail.component';

import { CaseRoutingModule } from './case-search-widget-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CaseRoutingModule
  ],
  declarations: [
    CaseSearchWidgetListComponent,
    CaseSearchWidgetDetailComponent,
  ]
})
export class CaseModule {}
