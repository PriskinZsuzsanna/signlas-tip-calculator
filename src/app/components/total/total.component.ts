import { Component, InputSignal, input } from '@angular/core';
import { TotalRowComponent } from '../total-row/total-row.component';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [TotalRowComponent],
  templateUrl: './total.component.html',
  styleUrl: './total.component.scss'
})
export class TotalComponent {
  calculatedPercent: InputSignal<number> = input(0);
  calculatedTotal: InputSignal<number> = input(0);
  calculationResults: string[] = ['percent', 'amount']
}
