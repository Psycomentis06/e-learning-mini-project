import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LessonPageComponent } from "./lesson-page.component";
const roues: Routes = [
    {
        path: ':id',
        component: LessonPageComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(roues)],
    exports: [RouterModule]
})
export class LessonPageRoutingModule { }