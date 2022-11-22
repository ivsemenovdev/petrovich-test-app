import {Component} from '@angular/core';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent {
  menuItems = [
    {item: 'Пункты самовывоза'},
    {item: 'Доставка'},
    {item: 'Самовывоз'},
    {item: 'Акции'},
    {item: 'Клуб друзей'},
    {item: 'Услуги'},
  ];
}
