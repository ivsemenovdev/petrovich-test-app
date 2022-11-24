import {Component} from '@angular/core';
import {HeaderLinkInterface} from "../../header-link.interface";

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})

export class HeaderTopComponent {
  menuItems: HeaderLinkInterface[] = [
    {item: 'Пункты самовывоза', route: '/contacts/map-bases/'},
    {item: 'Доставка', route: '/services/delivery/'},
    {item: 'Самовывоз', route: '/buyers/return/'},
    {item: 'Акции', route: '/promos/'},
    {item: 'Клуб друзей', route: '#'},
    {item: 'Услуги', route: '/services/'},
  ];
}
