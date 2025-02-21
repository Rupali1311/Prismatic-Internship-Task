import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count= new BehaviorSubject<number>(5); 
  count$ = this.count.asObservable(); 

  constructor() {}

  getCount(): number {
    return this.count.value;
  }

  setCount(count: number): void {
    this.count.next(count);
  }
}
