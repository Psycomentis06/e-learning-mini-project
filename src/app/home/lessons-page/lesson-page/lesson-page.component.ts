import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { faPaintBrush, faChevronLeft, faUser, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { ThemeModalService } from 'src/app/core/service/theme-modal.service';
import { Observable } from 'rxjs';
import { ICourse } from 'src/app/interfaces/course.interface';

@Component({
  selector: 'app-lesson-page',
  templateUrl: './lesson-page.component.html',
  styleUrls: ['./lesson-page.component.scss'],
})
export class LessonPageComponent implements OnInit {
  fontAwesomeIcons = {
    faPaintBrush,
    faChevronLeft,
    faUser,
    faBookmark
  }
  $courseObservable: Observable<ICourse>
  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute,
    public themeModalService: ThemeModalService
  ) {
    this.$courseObservable = this.getCourse()
  }

  ngOnInit(): void {
  }

  getCourse(): Observable<ICourse> {
    return this.courseService
      .get(Number(this.activatedRoute.snapshot.paramMap.get('id')));
  }
}
