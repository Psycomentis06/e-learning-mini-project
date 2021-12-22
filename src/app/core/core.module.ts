import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './components/search/search.component'


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    LogoComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }
