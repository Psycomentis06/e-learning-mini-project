import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home.component'
let routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'pricing',
        loadChildren: () => import('./pricing-page/pricing-page.module').then(m => m.PricingPageModule)
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}