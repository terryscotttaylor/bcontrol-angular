// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PermissionNameService }  from '../permission-name.service';
import { PermissionName } from '../permission-name';

@Component({
  selector: 'app-permission-name-list',
  templateUrl: './permission-name-list.component.html',
  styleUrls: ['./permission-name-list.component.css']
})
export class PermissionNameListComponent implements OnInit {
  permissionname$: Observable<String[]>;
  selectedId: number;

  constructor(
    private service: PermissionNameService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.permissionname$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getPermissionNames();
      })
    );
  }
}
