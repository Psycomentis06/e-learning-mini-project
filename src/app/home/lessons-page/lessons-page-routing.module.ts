import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LessonsPageComponent } from "./lessons-page.component";

const routes:Routes = [
    {
        path: '',
        component: LessonsPageComponent,
    },
    {
        path: 'lesson',
        loadChildren: () => import('./lesson-page/lesson-page.module').then(m => m.LessonPageModule)
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LessonsPageRoutingModule {
    
}