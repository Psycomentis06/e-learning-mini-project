import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, map, Observable, switchMap } from 'rxjs';
import { ICourse } from 'src/app/interfaces/course.interface';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-lessons-page',
  templateUrl: './lessons-page.component.html',
  styleUrls: ['./lessons-page.component.scss']
})
export class LessonsPageComponent implements OnInit {
  
  courses: ICourse[]
  $filterSubject: BehaviorSubject<string>
  _filterObservable: Observable<string>
  constructor(private coursesService: CourseService) {
    this.$filterSubject = new BehaviorSubject("")
    this._filterObservable = this.$filterSubject.asObservable()
    this.courses = []
  }

  ngOnInit(): void {
    this._filterObservable.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((v) => this.coursesService.getAll(30, v))
    ).subscribe(d => {
      this.courses = d
    })
  }

  search(value: string) {
    this.$filterSubject.next(value)
  }

}
