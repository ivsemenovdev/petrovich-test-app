import { Component, Input } from '@angular/core';
import { PromoteProductTileInterface } from './promote-product-tile.interface';

@Component({
  selector: 'app-promote-product',
  templateUrl: './promote-product.component.html',
  styleUrls: ['./promote-product.component.scss']
})
export class PromoteProductComponent {

  @Input()
  tiles: PromoteProductTileInterface[] | undefined;

}
