import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ILesson } from 'src/app/interfaces/lesson.interface';
import { LessonService } from 'src/app/services/lesson.service';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-lesson-content',
  templateUrl: './lesson-content.component.html',
  styleUrls: ['./lesson-content.component.scss'],
})
export class LessonContentComponent implements OnInit {
  $lessonObservable: Observable<ILesson>;
  constructor(
    private lessonService: LessonService,
    private activatedRoute: ActivatedRoute
  ) {
    this.$lessonObservable = this.getLesson()
  }

  ngOnInit(): void {}

  getLesson(): Observable<ILesson> {
    return this.activatedRoute.params.pipe(
      switchMap((p) => this.lessonService.get(p['lessonId'] || ''))
    );
  }
}
