import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public searchService:SearchService) { }

  ngOnInit(): void {
  }

}
