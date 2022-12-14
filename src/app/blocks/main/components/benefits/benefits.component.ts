import { Component, Input } from '@angular/core';
import { BenefitsInterface } from './benefits.interface';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent {

  @Input()
  benefitsTile!: BenefitsInterface[];

}
