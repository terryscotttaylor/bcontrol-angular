import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }           from './admin/admin.component';
import { AdminDashboardComponent }  from './admin-dashboard/admin-dashboard.component';
import { ManageCrisesComponent }    from './manage-crises/manage-crises.component';
import { ManageHeroesComponent }    from './manage-heroes/manage-heroes.component';
import { PermissionLevelListComponent  }    from './permission-level-list/permission-level-list.component';
import { PermissionLevelDetailComponent  }    from './permission-level-detail/permission-level-detail.component';
import { PermissionNameListComponent  }    from './permission-name-list/permission-name-list.component';
import { PermissionNameDetailComponent  }    from './permission-name-detail/permission-name-detail.component';
import { JurisdictionListComponent  }    from './jurisdiction-list/jurisdiction-list.component';
import { JurisdictionDetailComponent  }    from './jurisdiction-detail/jurisdiction-detail.component';
import { LookupListComponent  }    from './lookup-list/lookup-list.component';
import { LookupDetailComponent  }    from './lookup-detail/lookup-detail.component';



import { AuthGuard }                from '../auth/auth.guard';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'crises', component: ManageCrisesComponent },
          { path: 'heroes', component: ManageHeroesComponent },
          { path: 'permission-levels', component: PermissionLevelListComponent },
          { path: 'permission-levels/:id', component: PermissionLevelDetailComponent },
          { path: 'permission-names', component: PermissionNameListComponent },
          { path: 'permission-names/:id', component: PermissionNameDetailComponent },
          { path: 'jurisdictions', component: JurisdictionListComponent },
          { path: 'jurisdictions/:id', component: JurisdictionDetailComponent },
          { path: 'lookups', component: LookupListComponent },
          { path: 'lookups/:id', component: LookupDetailComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
