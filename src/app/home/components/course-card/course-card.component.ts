import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input('title') title: string;
  @Input('bg-color') bgColor: string;
  @Input('text-color') textColor: string;
  @Input('class') class: string;
  @Input('img-background') imgBackground: string;
  constructor() {
    this.title = "";
    this.bgColor = "rgb(0,0,0)";
    this.class = "";
    this.imgBackground = "";
    this.textColor = "rgb(255,255,255)"
   }

  ngOnInit(): void {
  }

}
