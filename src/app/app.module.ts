import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';
import { ContainerComponent } from './container/container.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RecentContentComponent } from './recent-content/recent-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    MainNavComponent,
    RecentContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
