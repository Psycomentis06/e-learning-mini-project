import { Component, OnDestroy, OnInit } from '@angular/core';
import { faSun, faMoon, faDesktop, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Subscription } from 'rxjs';
import { ThemeModalService } from '../../service/theme-modal.service';
import { ITheme, IThemeConfig } from '../../service/theme.interface';
import { ThemeService } from '../../service/theme.service';
@Component({
  selector: 'app-theme-modal',
  templateUrl: './theme-modal.component.html',
  styleUrls: ['./theme-modal.component.scss']
})
export class ThemeModalComponent implements OnInit, OnDestroy {
  fontAwesomeIcons = {
    faMoon,
    faSun,
    faDesktop,
    faTimes
  }
  
  currentTheme: IThemeConfig
  themeSubscription: Subscription | undefined;
  constructor(public themeModalService: ThemeModalService, public themeService: ThemeService) {
    this.currentTheme = themeService.getCurrentTheme();
   }

  ngOnInit(): void {
    this.themeSubscription = this.themeService.$theme.subscribe(t => {
      this.currentTheme = t;  
    })    
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) this.themeSubscription.unsubscribe()
  }

  setThemeDefault(value: "SYSTEM" | "DARK" | "LIGHT") {
    this.currentTheme.default = value
    this.changeTheme()
  }

  setThemeSkin(name: string, className: string) {
    let theme: ITheme = {
      className,
      name
    }
    this.currentTheme.theme = theme
    this.changeTheme()
  }

  changeTheme() {
    this.themeService.setTheme(this.currentTheme)
  }

}
