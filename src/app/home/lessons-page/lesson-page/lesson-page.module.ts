import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonPageComponent } from './lesson-page.component';
import { LessonPageRoutingModule } from './lesson-page-routing';
import { LessonChapterComponent } from './lesson-chapter/lesson-chapter.component';



@NgModule({
  declarations: [LessonPageComponent, LessonChapterComponent],
  imports: [
    CommonModule,
    LessonPageRoutingModule
  ]
})
export class LessonPageModule { }
