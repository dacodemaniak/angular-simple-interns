import { Component } from '@angular/core';
import { Intern } from './types/intern.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  interns: Array<Intern> = [
    {
      lastname: 'Aubert',
      firstname: 'Jean-Luc'
    },
    {
      lastname: 'Casper',
      firstname: 'Manon'
    }
  ]
}
