import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsPageRoutingModule } from './lessons-page-routing.module';
import { LessonsPageComponent } from './lessons-page.component';



@NgModule({
  declarations: [
    LessonsPageComponent
  ],
  imports: [
    CommonModule,
    LessonsPageRoutingModule
  ]
})
export class LessonsPageModule { }
