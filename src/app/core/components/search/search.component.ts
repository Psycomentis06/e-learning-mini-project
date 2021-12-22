import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { SearchService } from '../../service/search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit, OnDestroy {
  fontAwesomeIcons = {
    faSearch,
    faTimes,
  };

  @ViewChild("searchInput") private searchInputRef?: ElementRef;
 
  constructor(public searchService: SearchService) {}
  ngAfterViewInit(): void { 
    if (this.searchInputRef) this.searchInputRef.nativeElement.focus();
    this.searchService.searchSubscribe();
  }

  ngOnDestroy(): void {
    this.searchService.searchUnsubscribe();
  }
}
