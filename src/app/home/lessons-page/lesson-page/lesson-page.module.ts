import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonPageComponent } from './lesson-page.component';
import { LessonPageRoutingModule } from './lesson-page-routing';
import { LessonChapterComponent } from './lesson-chapter/lesson-chapter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LessonOverviewComponent } from './lesson-overview/lesson-overview.component';
import { LessonContentComponent } from './lesson-content/lesson-content.component';
import { DescriptionFormatterPipe } from './lesson-content/description-formatter.pipe';



@NgModule({
  declarations: [LessonPageComponent, LessonChapterComponent, LessonOverviewComponent, LessonContentComponent, DescriptionFormatterPipe],
  imports: [
    CommonModule,
    LessonPageRoutingModule,
    FontAwesomeModule
  ]
})
export class LessonPageModule { }
