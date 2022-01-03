import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { FontAwesomeModule  } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HomeComponent,
    CourseCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
