import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICourse } from 'src/app/interfaces/course.interface';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-lesson-overview',
  templateUrl: './lesson-overview.component.html',
  styleUrls: ['./lesson-overview.component.scss'],
})
export class LessonOverviewComponent implements OnInit {
  $courseObservable: Observable<ICourse>;
  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute
  ) {
    this.$courseObservable = this.getCourse();
  }

  ngOnInit(): void {}

  getCourse(): Observable<ICourse> {
    return this.courseService.get(
      Number(this.activatedRoute.snapshot.paramMap.get('id'))
    );
  }
}
