import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {

  headerMiddleFixed = false;

  @HostListener('window:scroll') onScroll() {
    this.headerMiddleFixed = window.scrollY > 48;
  }

}
