import { Injectable } from '@angular/core';
import { Intern } from '../types/intern.type';
import { IService } from '../../core/interfaces/i-service';

@Injectable({
  providedIn: 'root'
})
export class InternService implements IService<Intern> {
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
  
  add(item: Intern): void {
    this._interns.push(item)
  }

  get interns(): Array<Intern> {
    return this._interns
  }
}
