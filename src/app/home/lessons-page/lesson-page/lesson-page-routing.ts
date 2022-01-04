import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LessonChapterComponent } from "./lesson-chapter/lesson-chapter.component";
import { LessonOverviewComponent } from "./lesson-overview/lesson-overview.component";
import { LessonPageComponent } from "./lesson-page.component";
const routes: Routes = [
    {
        path: ':id',
        component: LessonPageComponent,
        data: {
            hideHeader: true,
            hideFooter: false
        },
        children: [
            {
                path: '',
                component: LessonOverviewComponent
            },
            {
                path: 'chapter',
                component: LessonChapterComponent
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LessonPageRoutingModule { }