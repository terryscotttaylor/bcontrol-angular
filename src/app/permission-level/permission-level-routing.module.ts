import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PermissionLevelListComponent }    from './permission-level-list/permission-level-list.component';
import { PermissionLevelDetailComponent }  from './permission-level-detail/permission-level-detail.component';

const permissionLevelsRoutes: Routes = [
  { path: '',  component: PermissionLevelListComponent, data: { animation: 'permissionlevels' } },
  { path: ':id', component: PermissionLevelDetailComponent, data: { animation: 'permissionlevel' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(permissionLevelsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PermissionLevelRoutingModule { }
