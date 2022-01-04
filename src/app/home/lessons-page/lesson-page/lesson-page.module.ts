import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonPageComponent } from './lesson-page.component';
import { LessonPageRoutingModule } from './lesson-page-routing';



@NgModule({
  declarations: [LessonPageComponent],
  imports: [
    CommonModule,
    LessonPageRoutingModule
  ]
})
export class LessonPageModule { }
