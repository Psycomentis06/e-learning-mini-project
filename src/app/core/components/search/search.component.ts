import { Component, OnInit } from '@angular/core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { SearchService } from '../../service/search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  fontAwesomeIcons = {
    faSearch,
    faTimes
  }
  constructor(public searchService: SearchService) { }

  ngOnInit(): void {
  }

}
