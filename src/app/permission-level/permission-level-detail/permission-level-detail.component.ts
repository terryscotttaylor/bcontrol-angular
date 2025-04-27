import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { PermissionLevelService }  from '../permission-level.service';
import { PermissionLevel } from '../permission-level';

@Component({
  selector: 'app-permission-level-detail',
  templateUrl: './permission-level-detail.component.html',
  styleUrls: ['./permission-level-detail.component.css']
})
export class PermissionLevelDetailComponent implements OnInit {
  permissionlevel$: Observable<PermissionLevel>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PermissionLevelService
  ) {}

  ngOnInit() {
    this.permissionlevel$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getPermissionLevel(params.get('id')))
    );
  }

  gotoPermissionLevels(permissionlevel: PermissionLevel) {
    let permissionLevelId = permissionlevel ? permissionlevel.id : null;
    this.router.navigate(['/permission-levels', { id: permissionLevelId }]);
  }
}
