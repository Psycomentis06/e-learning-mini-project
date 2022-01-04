import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationStart, NavigationEnd, NavigationStart, Router, RoutesRecognized } from '@angular/router';
import { Subscription } from 'rxjs';
import { fadeInOut } from '../animation/fade-in-out.animation';
import { SearchService } from '../service/search.service';
import { ThemeModalService } from '../service/theme-modal.service';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    fadeInOut(100)
  ]
})
export class LayoutComponent implements OnInit, OnDestroy {

  themeSubscription: Subscription|undefined;
  hideHeaderFooter: boolean
  constructor(public searchService: SearchService, public themeModalService: ThemeModalService, public themeService: ThemeService, private router: Router, private activeRoute: ActivatedRoute) {
    this.hideHeaderFooter = false;
  }
  ngOnInit(): void {
    this.themeSubscription = this.themeService.$theme.subscribe();
    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        console.log("Navigation Start");
        
      } else if (e instanceof ActivationStart) {
        if (e.snapshot.data['noHeaderFooter'] === true) this.hideHeaderFooter = true;
        else this.hideHeaderFooter = false;
      } else if (e instanceof NavigationEnd) {
        console.log("NavigationEnd");
        
      }
    })
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) this.themeSubscription.unsubscribe()
  }

}
