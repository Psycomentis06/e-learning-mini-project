import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LessonChapterComponent } from "./lesson-chapter/lesson-chapter.component";
import { LessonContentComponent } from "./lesson-content/lesson-content.component";
import { LessonOverviewComponent } from "./lesson-overview/lesson-overview.component";
import { LessonPageComponent } from "./lesson-page.component";
const routes: Routes = [
  {
    path: ':id',
    component: LessonPageComponent,
    data: {
      hideHeader: true,
      hideFooter: false,
    },
    children: [
      {
        path: '',
        component: LessonOverviewComponent,
        data: {
          hideHeader: true,
          hideFooter: false,
        },
      },
      {
        path: ':chapterId',
        component: LessonChapterComponent,
        data: {
          hideHeader: true,
          hideFooter: false,
          animation: 'isLeft'
        },
      },
      {
        path: ':chapterId/:lessonId',
        component: LessonContentComponent,
        data: {
          hideHeader: true,
          hideFooter: false,
          animation: 'isRight'
        },
      },
    ],
  },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LessonPageRoutingModule { }