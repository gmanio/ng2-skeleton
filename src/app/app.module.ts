// Native Module
import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';
import {FormsModule} from "@angular/forms";

// User Module
import {AppComponent} from './app.component';

// User Router
import {routingModule} from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routingModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}