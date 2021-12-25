import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faReddit, faInstagram } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  fontAwesome = {
    faFacebook,
    faInstagram,
    faReddit,
    faTwitter
  }
  constructor() { }

  ngOnInit(): void {
  }

}
