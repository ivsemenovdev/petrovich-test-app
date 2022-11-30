import { Component } from '@angular/core';
import { HeaderLinkInterface } from 'src/app/blocks/header/header-link.interface';

@Component({
  selector: 'app-header-top-nav-component',
  templateUrl: './header-top-nav-component.component.html',
  styleUrls: ['./header-top-nav-component.component.scss']
})
export class HeaderTopNavComponentComponent {

  menuItems: HeaderLinkInterface[] = [
    {item: 'Пункты самовывоза', route: '/contacts/map-bases/'},
    {item: 'Доставка', route: '/services/delivery/'},
    {item: 'Возврат', route: '/buyers/return/'},
    {item: 'Акции', route: '/promos/'},
    {item: 'Клуб друзей', route: '#'},
    {item: 'Услуги', route: '/services/'},
  ];

}
