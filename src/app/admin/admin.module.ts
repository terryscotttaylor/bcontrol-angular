import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';


import { AdminComponent }           from './admin/admin.component';
import { AdminDashboardComponent }  from './admin-dashboard/admin-dashboard.component';
import { ManageCrisesComponent }    from './manage-crises/manage-crises.component';
import { ManageHeroesComponent }    from './manage-heroes/manage-heroes.component';
import { PermissionLevelListComponent }    from './permission-level-list/permission-level-list.component';
import { PermissionLevelDetailComponent }    from './permission-level-detail/permission-level-detail.component';
import { PermissionNameListComponent }    from './permission-name-list/permission-name-list.component';
import { PermissionNameDetailComponent }    from './permission-name-detail/permission-name-detail.component';
import { JurisdictionListComponent }    from './jurisdiction-list/jurisdiction-list.component';
import { JurisdictionDetailComponent }    from './jurisdiction-detail/jurisdiction-detail.component';
import { LookupListComponent }    from './lookup-list/lookup-list.component';
import { LookupDetailComponent }    from './lookup-detail/lookup-detail.component';


import { AdminRoutingModule }       from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageCrisesComponent,
    ManageHeroesComponent,
    PermissionLevelListComponent,
    PermissionLevelDetailComponent,
    PermissionNameListComponent,
    PermissionNameDetailComponent,
    JurisdictionListComponent,
    JurisdictionDetailComponent,
    LookupListComponent,
    LookupDetailComponent
  ]
})
export class AdminModule {}
