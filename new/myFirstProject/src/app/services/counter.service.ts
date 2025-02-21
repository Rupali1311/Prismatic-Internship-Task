import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count: number = 5;

  constructor() {}

  getCount(): number {
    return this.count;
  }

  setCount(count: number): void {
    this.count = count;
  }
}
