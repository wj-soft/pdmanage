import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { MainNavComponent } from './main-nav/main-nav.component'
import { RecentContentComponent } from './recent-content/recent-content.component';
import { LookupItemComponent } from './lookup-item/lookup-item.component';
const routes: Routes = [
  { path: '', component: RecentContentComponent },
  { path: 'mainnav', component: MainNavComponent },
  { path: 'lookitem', component: LookupItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
