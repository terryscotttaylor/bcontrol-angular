import { Component } from '@angular/core';
import {Globals} from '../../globals'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
	constructor(private globals: Globals) {
  }
}
