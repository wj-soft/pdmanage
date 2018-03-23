import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { MainNavComponent } from './main-nav/main-nav.component'
import { RecentContentComponent } from './recent-content/recent-content.component';
const routes: Routes = [
  { path: '', component: RecentContentComponent },
  { path: 'mainnav', component: MainNavComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
