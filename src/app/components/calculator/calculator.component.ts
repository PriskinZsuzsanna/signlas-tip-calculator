import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { SelectComponent } from '../select/select.component';
import { TotalComponent } from '../total/total.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [InputComponent, SelectComponent, TotalComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  
}
