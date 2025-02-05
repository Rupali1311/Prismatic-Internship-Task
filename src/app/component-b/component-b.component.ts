import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent {
  count: number;

  constructor(private counterService: CounterService) {
    this.count = this.counterService.getCount();
  }

  decrementCount() {
    this.counterService.setCount(this.count - 1);
    this.count = this.counterService.getCount();
  }


   
}
