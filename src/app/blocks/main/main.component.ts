import { Component } from '@angular/core';
import { PromoteProductTileInterface } from './components/promote-product/promote-product-tile.interface';
import { BenefitsInterface } from './components/benefits/benefits.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {

  tiles: PromoteProductTileInterface[] = [
    {id: 1, text: 'One', cols: 3, rows: 4, color: 'lightblue'},
    {id: 2, text: 'Two', cols: 3, rows: 4, color: 'lightgreen'},
    {id: 3, text: 'Three', cols: 3, rows: 4, color: 'lightpink'},
    {id: 4, text: 'Four', cols: 3, rows: 4, color: '#DDBDF1'},
  ];

  benefitsTiles: BenefitsInterface[] = [
    {
      text: '<strong>Большой ассортимент</strong><br>строительных материалов всегда в наличии',
      cols: 3,
      rows: 1,
      img: './assets/icons/benefit-first.svg'
    },
    {
      text: '<strong>Доставка стройматериалов</strong><br>в течение двух часов или в любое удобное время',
      cols: 3,
      rows: 1,
      img: './assets/icons/benefit-second.svg'
    },
    {
      text: '<strong>Простой возврат товаров</strong><br>которые не пригодились в течение 360 дней',
      cols: 3,
      rows: 1,
      img: './assets/icons/benefit-third.svg'
    },
    {
      text: 'Многоуровневая <strong>система управления качеством</strong> по стандарту ISO 9001',
      cols: 3,
      rows: 1,
      img: './assets/icons/benefit-four.svg'
    },
  ];

}
