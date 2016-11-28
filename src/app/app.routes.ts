import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';

export const routingModule = RouterModule.forRoot([
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: AppComponent}
]);