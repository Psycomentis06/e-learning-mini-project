import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable, Subscription, tap } from 'rxjs';
import { ISearchDataSource, ISearchDataSourceAction, ISearchDataSourceLink } from './interface/search-datasource.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // Visibility states
  private $searchVisibilitySubject: BehaviorSubject<boolean>;
  private _searchVisibilityObservable: Observable<boolean>;

  private searchDataSourceOrigin: ISearchDataSource;
  private searchDataSourceClone: ISearchDataSource;

  // Search states
  private $searchValueSubject: BehaviorSubject<string>;
  private _searchValueObservable: Observable<string>;
  private searchValueSubscription?: Subscription;

  // DataSource states
  private $searchDataSourceSubject: BehaviorSubject<ISearchDataSource>;
  private _searchDataSourceObservable: Observable<ISearchDataSource>;
  private searchDataSourceSubscription?: Subscription;

  constructor() {
    this.searchDataSourceOrigin = {
      actions: [
        {
          name: 'Logout',
          action: () => {
            alert('Logout');
          },
          icon: 'fas fa-sign-out-alt',
          tags: []
        },
        {
          name: 'Change Theme',
          action: () => {
            alert('Change Theme');
          },
          icon: 'fas fa-paint-brush',
          tags: []
        },
        {
          name: 'Clear local storage',
          action: () => {
            alert('Clear cache');
          },
          icon: 'fas fa-trash',
          tags: []
        },
        {
          name: 'Remove bookmarks',
          action: () => {
            alert('Bookmarks');
          },
          icon: 'fas fa-bookmark',
          tags: []
        },
        {
          name: 'Change Accent Color',
          action: () => {
            alert('Accent Color');
          },
          icon: 'fas fa-palette',
          tags: []
        },
        {
          name: 'Send Report',
          action: () => {
            alert('Report');
          },
          icon: 'fas fa-sign-out-alt',
          tags: []
        }
      ],

      links: [
        {
          name: 'Home',
          path: '',
          breadcrumb: 'Home',
          icon: 'fas fa-igloo',
          tags: []
        },
        {
          name: 'Change Password',
          path: '/account/settings/password',
          breadcrumb: 'Home > Account > Settings > Password',
          icon: 'fas fa-igloo',
          tags: []
        },
        {
          name: 'Lessons',
          path: '/lessons',
          breadcrumb: 'Home > Lessons',
          icon: 'fas fa-igloo',
          tags: []
        },
        {
          name: 'Pricing',
          path: '/pricing',
          breadcrumb: 'Home > Pricing',
          icon: 'fas fa-igloo',
          tags: []
        },
        {
          name: 'About',
          path: '/about',
          breadcrumb: 'Home > About',
          icon: 'fas fa-igloo',
          tags: []
        },
        {
          name: 'Account',
          path: '/account',
          breadcrumb: 'Home > Account',
          icon: 'fas fa-igloo',
          tags: []
        },
        {
          name: 'Sign In',
          path: '/signin',
          breadcrumb: 'Home > Sign In',
          icon: 'fas fa-igloo',
          tags: []
        },
        {
          name: 'Bookmarks',
          path: '/bookmarks',
          breadcrumb: 'Home > Bookmarks',
          icon: 'fas fa-igloo',
          tags: []
        }
      ],
    };
    this.searchDataSourceClone = this.searchDataSourceOrigin;
    this.$searchDataSourceSubject = new BehaviorSubject<ISearchDataSource>(this.searchDataSourceClone);
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


  public get visible(): Observable<boolean> {
    return this._searchVisibilityObservable
  }


  search(value: string): void {
    this.$searchValueSubject.next(value);
  }

  searchSubscribe(): void {
    this.searchValueSubscription = this._searchValueObservable.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      tap((v) => {
        this.getData(v);
        return v;
      })
    ).subscribe();
  }

  searchUnsubscribe(): void {
    if (this.searchValueSubscription) this.searchValueSubscription.unsubscribe();
  }


  getData(value: string): void {
    this.searchDataSourceClone = Object.assign({}, this.searchDataSourceOrigin)
    // Filter links
    if (this.searchDataSourceClone.links) {
      let links: ISearchDataSourceLink[] | undefined = []
      links = this.searchDataSourceOrigin.links?.filter(
          (l) =>
            l.name.trim().toLowerCase().includes(value.toLowerCase()) ||
            l.path.trim().toLowerCase().includes(value.toLowerCase())
        );
      this.searchDataSourceClone.links = links
    }

    // Filter Actions
    if (this.searchDataSourceClone.actions) {
      let actions: ISearchDataSourceAction[] | undefined = []
      actions = this.searchDataSourceClone.actions?.filter(
        (a) =>
          a.name.trim().toLowerCase().includes(value.trim().toLowerCase()) ||
          value.length === 0
      );
      this.searchDataSourceClone.actions = actions
    }

    // Filter Courses
    //this.searchDataSourceClone.courses?.filter(c => c.name)

    this.$searchDataSourceSubject.next(this.searchDataSourceClone); 
  }

  $dataSource(): Observable<ISearchDataSource> {
    return this._searchDataSourceObservable
  }

}
