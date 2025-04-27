import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PermissionLevelListComponent }    from './permission-level-list/permission-level-list.component';
import { PermissionLevelDetailComponent }  from './permission-level-detail/permission-level-detail.component';

import { PermissionLevelRoutingModule } from './permission-level-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PermissionLevelRoutingModule
  ],
  declarations: [
    PermissionLevelListComponent,
    PermissionLevelDetailComponent
  ]
})
export class PermissionLevelModule {}
