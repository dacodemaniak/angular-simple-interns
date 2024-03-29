import { Component } from '@angular/core';
import { Intern } from './types/intern.type';
import { InternService } from './services/intern.service';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  /**
   * @var Array<Intern>
   * Array of Intern to be displayed
   */
  interns: Array<Intern> = []
  
  constructor(
    private _service: InternService
  ) {}

  ngOnInit(): void {
    this._service.findAll()
    .pipe(
      take(1),
      map((interns: Intern[]) => {
        return interns.sort((i1: Intern, i2: Intern) => {
          return i1.lastname.localeCompare(i2.lastname)
        })
      })
    )
      .subscribe((interns: Intern[]) => {
        this.interns = interns
      })
  }
}
