import { Component, HostListener, Input, OnInit } from '@angular/core';
import { IFramework } from 'src/app/interfaces/framework.interface';
import { ILanguage } from 'src/app/interfaces/language.interface';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input('title') title: string;
  @Input('bg-color') bgColor: string;
  @Input('text-color') textColor: string;
  @Input('description') description: string;

   radialXTransition: string;
   radialYTransition: string;
  constructor() {
    this.title = "No Title";
    this.description = "No description"
    this.bgColor = "rgb(0,0,0)";
    this.textColor = "rgb(255,255,255)",

    this.radialXTransition = "0";
    this.radialYTransition = "10%";
   }

  ngOnInit(): void {
  }

  @HostListener('mousemove', ['$event'])
  mouseMoveHandler($event: MouseEvent) {    
    this.radialXTransition = ($event.offsetX / 2) + "px";
    this.radialYTransition = ($event.offsetY /2) + "px";
  }

}
