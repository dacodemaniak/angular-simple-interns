import { Injectable } from '@angular/core';
import { Intern } from '../types/intern.type';

@Injectable({
  providedIn: 'root'
})
export class InternService {
  private _interns: Array<Intern> = [
    {
      lastname: 'Aubert',
      firstname: 'Jean-Luc'
    },
    {
      lastname: 'Casper',
      firstname: 'Manon'
    }
  ]
  constructor() { }

  get interns(): Array<Intern> {
    return this._interns
  }
}
