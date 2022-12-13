import { Component } from '@angular/core';

interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 3, color: '#947fa1'},
    {text: 'Two', cols: 1, rows: 3, color: '#947fa1'},
    {text: 'Three', cols: 1, rows: 3, color: '#947fa1'},
    {text: 'Four', cols: 1, rows: 3, color: '#947fa1'},
    {text: 'Five', cols: 1, rows: 3, color: '#947fa1'},
  ];

}
