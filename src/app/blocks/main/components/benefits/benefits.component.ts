import { Component } from '@angular/core';

interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent {

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: '#947fa1'},
    {text: 'Two', cols: 3, rows:1, color: '#947fa1'},
    {text: 'Three', cols: 3, rows: 1, color: '#947fa1'},
    {text: 'Four', cols: 3, rows: 1, color: '#947fa1'},
  ];

}
