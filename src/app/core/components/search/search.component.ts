import { Component, OnInit } from '@angular/core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
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
  constructor() { }

  ngOnInit(): void {
  }

}
