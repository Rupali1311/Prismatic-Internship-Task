import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  message: string = "Hello from Parent!";
  count: number = 10;
  isActive: boolean = true;
  user: { name: string; age: number } = { name: "Alice", age: 25 };
  colors: string[] = ["Red", "Green", "Blue"];


  

  

  receivedData: any = {};

  handleData(data: any) {
    this.receivedData = data;
    
  }
}

