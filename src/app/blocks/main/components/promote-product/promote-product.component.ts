import { Component } from '@angular/core';

interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  id: number;
}

@Component({
  selector: 'app-promote-product',
  templateUrl: './promote-product.component.html',
  styleUrls: ['./promote-product.component.scss']
})
export class PromoteProductComponent {

  tiles: Tile[] = [
    {id: 1, text: 'One', cols: 3, rows: 4, color: 'lightblue'},
    {id: 2, text: 'Two', cols: 3, rows:4, color: 'lightgreen'},
    {id: 3, text: 'Three', cols: 3, rows: 4, color: 'lightpink'},
    {id: 4, text: 'Four', cols: 3, rows: 4, color: '#DDBDF1'},
  ];

}
