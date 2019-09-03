import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { AccountDetailsComponent } from './account-details/account-details.component';
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: "/account-details",
        pathMatch: 'full'
    },
    {
        path: 'account-details',
        component: AccountDetailsComponent
    }
];
@NgModule({
    // hashtag -> use useHash:true
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
