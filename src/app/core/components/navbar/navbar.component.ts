import { Component, OnInit } from '@angular/core';
import {faBars, faAngleLeft, faSearch, faBookmark, faUser, faPaintBrush} from '@fortawesome/free-solid-svg-icons'
import { Observable } from 'rxjs';
import { NavbarService } from '../../service/navbar.service';
import { SearchService } from '../../service/search.service';
import { ThemeModalService } from '../../service/theme-modal.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  fontAwesomeIcons = {
    faBars,
    faAngleLeft,
    faSearch,
    faBookmark,
    faUser,
    faPaintBrush
  }
  
  navbarMenu: Observable<boolean>;
  constructor(public navbarService: NavbarService, public searchService: SearchService, public themeModalService: ThemeModalService) {
    this.navbarMenu = new Observable();
  }
  ngOnInit(): void {
    this.navbarMenu = this.navbarService.navbarSubject$
    this.navbarMenu.subscribe()
  }
}
