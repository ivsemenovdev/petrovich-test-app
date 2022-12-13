import { Component } from '@angular/core';

interface Tile {
  cols: number;
  rows: number;
  text: string;
  img: string;
}

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent {

  tiles: Tile[] = [
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
