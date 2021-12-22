import { Injectable } from '@angular/core';
import { BehaviorSubject, debounce, debounceTime, distinctUntilChanged, interval, map, Observable, Subscription, tap } from 'rxjs';
import { ISearchDataSource } from '../components/search/search-datasource.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // Visibility states
  private $searchVisibilitySubject: BehaviorSubject<boolean>;
  private _searchVisibilityObservable: Observable<boolean>;
  
  private searchDataSource: ISearchDataSource;
  
  // Search states
  private $searchValueSubject: BehaviorSubject<string>;
  private _searchValueObservable: Observable<string>;
  private searchValueSubscription?: Subscription;

  // DataSource states
  private $searchDataSourceSubject: BehaviorSubject<ISearchDataSource>;
  private _searchDataSourceObservable: Observable<ISearchDataSource>;
  private searchDataSourceSubscription?: Subscription;

  constructor() {
    this.searchDataSource = {}
    this.$searchDataSourceSubject = new BehaviorSubject<ISearchDataSource>(this.searchDataSource);
    this._searchDataSourceObservable = this.$searchDataSourceSubject.asObservable();
    this.$searchValueSubject = new BehaviorSubject<string>("");
    this._searchValueObservable = this.$searchValueSubject.asObservable();
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


  search(value: string): void {
    this.$searchValueSubject.next(value);
  }
  
  searchSubscribe(): void {
    this.searchValueSubscription = this._searchValueObservable.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      tap((v) => v)
    ).subscribe();
  }

  searchUnsubscribe(): void {
    if (this.searchValueSubscription) this.searchValueSubscription.unsubscribe();
  }
 

}
