import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {
  count: number = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.count$.subscribe(value => {
      this.count = value; // Update count when service changes
    });
  }

  incrementCount() {
    this.counterService.setCount(this.count + 1);
    // this.count = this.counterService.getCount();
  }

  // currentDate: Date = new Date();

 
}
