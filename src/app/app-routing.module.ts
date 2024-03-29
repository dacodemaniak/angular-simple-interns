import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeComponent as PoeHome } from './poe/home/home.component'
import { InternFormComponent } from './home/intern-form/intern-form.component';
import { AddComponent } from './poe/add/add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'intern-add',
    component: InternFormComponent,
    pathMatch: 'full'
  },
  {
    path: 'poe',
    component: PoeHome,
    pathMatch: 'full'
  },
  {
    path: 'poe-add',
    component: AddComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
