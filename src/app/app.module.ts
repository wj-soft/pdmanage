import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

import { ContainerComponent } from './container/container.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RecentContentComponent } from './recent-content/recent-content.component';
import { LookupItemComponent } from './lookup-item/lookup-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    MainNavComponent,
    RecentContentComponent,
    LookupItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
