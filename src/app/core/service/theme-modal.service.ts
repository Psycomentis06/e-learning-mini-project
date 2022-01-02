import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeModalService {

  private $modalSubject: BehaviorSubject<boolean>;
  private _modalObservable: Observable<boolean>;

  constructor() {
    this.$modalSubject = new BehaviorSubject<boolean>(false);
    this._modalObservable = this.$modalSubject.asObservable()
   }

  toggle() {
    this.$modalSubject.next(!this.$modalSubject.getValue())
  }

  open() {
    this.$modalSubject.next(true)
  }

  close() {
    this.$modalSubject.next(false)
  }

  
  public get $visible() : Observable<boolean> {
    return this._modalObservable
  }
  
}
