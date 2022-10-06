import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HeroDetailComponent } from './features/heroes/hero-detail/hero-detail.component';
import { HeroFormComponent } from './features/heroes/hero-form/hero-form.component';
import { HeroListComponent } from './features/heroes/hero-list/hero-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: 'hero-form', component: HeroFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}