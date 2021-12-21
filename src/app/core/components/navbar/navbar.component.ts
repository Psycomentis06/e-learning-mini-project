import { Component, OnInit } from '@angular/core';
import {faBars, faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { Observable } from 'rxjs';
import { NavbarService } from '../../service/navbar.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faBars = faBars;
  faAngleLeft = faAngleLeft;
  
  navbarMenu: Observable<boolean>;
  constructor(public navbarService: NavbarService) {
    this.navbarMenu = new Observable();
  }
  ngOnInit(): void {
    this.navbarMenu = this.navbarService.navbarSubject$
    this.navbarMenu.subscribe()
  }
}
