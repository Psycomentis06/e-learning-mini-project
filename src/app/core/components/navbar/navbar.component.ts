import { Component, OnInit } from '@angular/core';
import {faBars, faAngleLeft} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  faBars = faBars;
  faAngleLeft = faAngleLeft;
  ngOnInit(): void {}
}
