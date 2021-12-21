import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private _navbarSubject: BehaviorSubject<boolean>;
  readonly navbarSubject$: Observable<boolean>;
  constructor() {
    this._navbarSubject = new BehaviorSubject<boolean>(false);
    this.navbarSubject$ = this._navbarSubject.asObservable();
  }

  toggle() {
    this._navbarSubject.next(!this._navbarSubject.getValue());
  }

  open(): void {
    this._navbarSubject.next(true);
  }

  close():void {
    this._navbarSubject.next(false);
  }
}
