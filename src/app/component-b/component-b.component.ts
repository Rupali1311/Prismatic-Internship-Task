import { Component,OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit{
  count: number = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.count$.subscribe(value => {
      this.count = value; // Update count when service changes
    });
  }

  decrementCount() {
    this.counterService.setCount(this.count - 1);
  }


   
}
