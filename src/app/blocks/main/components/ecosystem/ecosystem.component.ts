import { Component } from '@angular/core';

interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-ecosystem',
  templateUrl: './ecosystem.component.html',
  styleUrls: ['./ecosystem.component.scss']
})
export class EcosystemComponent {

  tiles: Tile[] = [
    {text: 'One', cols: 6, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 2, rows:1, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Five', cols: 3, rows: 2, color: 'lightblue'},
    {text: 'Six', cols: 3, rows: 2, color: 'lightgreen'},
    {text: 'Seven', cols: 3, rows: 1, color: 'lightpink'},
    {text: 'Eighth', cols: 3, rows: 1, color: '#DDBDF1'},
  ];

}
