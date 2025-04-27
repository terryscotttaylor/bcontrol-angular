// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PermissionLevelService }  from '../permission-level.service';
import { PermissionLevel } from '../permission-level';

@Component({
  selector: 'app-permission-level-list',
  templateUrl: './permission-level-list.component.html',
  styleUrls: ['./permission-level-list.component.css']
})
export class PermissionLevelListComponent implements OnInit {
  permissionlevel$: Observable<PermissionLevel[]>;
  selectedId: number;

  constructor(
    private service: PermissionLevelService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.permissionlevel$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getPermissionLevels();
      })
    );
  }
}
