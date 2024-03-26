import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { InternFormComponent } from './intern-form/intern-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    InternFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
