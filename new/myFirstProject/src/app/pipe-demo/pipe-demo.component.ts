import { Component } from '@angular/core';
// import { DatePipe } from '@angular/common';
// import { UpperCasePipe } from '@angular/common';
// import { LowerCasePipe } from '@angular/common';
// import { CurrencyPipe } from '@angular/common';
// import { DecimalPipe } from '@angular/common';
// import { PercentPipe } from '@angular/common';
// import { AsyncPipe } from '@angular/common';
// import { JsonPipe } from '@angular/common';

@Component({
  
  selector: 'app-pipe-demo',
  standalone: true,
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss']
  // imports: [DatePipe,UpperCasePipe,LowerCasePipe,CurrencyPipe,DecimalPipe,PercentPipe,JsonPipe]
})
export class PipeDemoComponent {
  // today = new Date(); 
  // price = 1234.567; 
  // percentage = 0.25; 
  // userData = { name: 'John Doe', age: 30 }; 
  // message = 'Hello World'; 
  // // observableData = new Promise(resolve => setTimeout(() => resolve('Async Data Loaded'), 2000)); 
  currentDate: Date = new Date();
}
