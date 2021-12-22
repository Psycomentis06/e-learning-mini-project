import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private $searchVisibilitySubject: BehaviorSubject<boolean>;
  private  _searchVisibilityObservable: Observable<boolean>;
  constructor() {
    this.$searchVisibilitySubject = new BehaviorSubject<boolean>(false);
    this._searchVisibilityObservable = this.$searchVisibilitySubject.asObservable();
  }

  toggle() {
    this.$searchVisibilitySubject.next(!this.$searchVisibilitySubject.getValue());
  }

  show() {
    this.$searchVisibilitySubject.next(true);
  }

  hide() {
    this.$searchVisibilitySubject.next(false);
  }

  
  public get visible() : Observable<boolean> {
    return this._searchVisibilityObservable
  }
  
}
