import { Component } from '@angular/core';
import { GlobalText } from '../../../data/text.js';
import { UrlNavigateService } from '../../../services/url-navigate.service.js';
import { GlobalUrl } from '../../../data/url.js';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor (
    public globalText: GlobalText,
    public urlNavigateService: UrlNavigateService,
    public globalUrl: GlobalUrl
  ) { }
  navegateHome() {
    this.urlNavigateService.navegateUrl(this.globalUrl.home);
  }
}
