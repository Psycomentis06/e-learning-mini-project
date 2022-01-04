import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IModule } from 'src/app/interfaces/module.interface';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-lesson-chapter',
  templateUrl: './lesson-chapter.component.html',
  styleUrls: ['./lesson-chapter.component.scss']
})
export class LessonChapterComponent implements OnInit {
  $moduleObservable: Observable<IModule>
  constructor(private moduleService: ModuleService, private activatedRoute: ActivatedRoute) {
    this.$moduleObservable = this.getChapter();
  }

  ngOnInit(): void {
    
  }

  getChapter():Observable<IModule> {
    return this.activatedRoute.params.pipe(
      switchMap(p => this.moduleService.get(p["chapterId"] || ""))
    )
  }

}
