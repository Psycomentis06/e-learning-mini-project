import { Component, OnInit } from '@angular/core';
import {faMinus} from '@fortawesome/free-solid-svg-icons'
import { ILanguage } from '../interfaces/language.interface';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fontAwesomeIcons = {
    faMinus
  }
  languages: ILanguage[]
  constructor(private languageService: LanguageService) {
    this.languages = []
  }

  ngOnInit(): void {
    this.languageService.getAll(4).subscribe(l => this.languages = l)
  }

}
