import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { ActiveFacesnapComponent } from "./active-facesnap/active-facesnap.component";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routes : Routes = [
    {path : 'facesnaps/:id', component: ActiveFacesnapComponent},
    {path : 'facesnaps', component: FaceSnapListComponent},
    {path : '', component: LandingPageComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule,
    ]
})

export class AppRouterModule {

}