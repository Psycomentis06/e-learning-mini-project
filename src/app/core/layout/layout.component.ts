import { Component, OnDestroy, OnInit } from '@angular/core';
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
  constructor(public searchService: SearchService, public themeModalService: ThemeModalService, public themeService: ThemeService) {
    
  }
  
  ngOnInit(): void {
    this.themeSubscription = this.themeService.$theme.subscribe()
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) this.themeSubscription.unsubscribe()
  }

}
