import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent {
  count: number;

  constructor(private counterService: CounterService) {
    this.count = this.counterService.getCount();
  }

  incrementCount() {
    this.counterService.setCount(this.count + 1);
    this.count = this.counterService.getCount();
  }

  currentDate: Date = new Date();

 
}
