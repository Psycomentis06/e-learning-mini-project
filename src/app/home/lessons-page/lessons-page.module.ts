import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsPageRoutingModule } from './lessons-page-routing.module';
import { LessonsPageComponent } from './lessons-page.component';
import { LessonPageComponent } from './lesson-page/lesson-page.component';



@NgModule({
  declarations: [
    LessonsPageComponent,
    LessonPageComponent
  ],
  imports: [
    CommonModule,
    LessonsPageRoutingModule
  ]
})
export class LessonsPageModule { }
