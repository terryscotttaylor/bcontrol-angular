import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PermissionNameService }  from '../permission-name.service';
import { PermissionName } from '../permission-name';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-permission-name-detail',
  templateUrl: './permission-name-detail.component.html',
  styleUrls: ['./permission-name-detail.component.css']
})
export class PermissionNameDetailComponent implements OnInit {
  permissionname$: Observable<String>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PermissionNameService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.permissionname$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.service.getPermissionName(params.get('id'))));
  }

  gotoPermissionNames(permissionname: String) {
    let permissionName = permissionname ? permissionname : null;
    this.router.navigate(['./admin/permission-names', { name: permissionName }]);
  }
}
