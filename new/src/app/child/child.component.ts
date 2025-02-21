import { Component, Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  //data recieved from parent
  @Input() message!: string;
  @Input() count!: number;
  @Input() isActive!: boolean;
  @Input() user!: { name: string; age: number };
  @Input() colors!: string[];


  



  @Output() dataEmitter = new EventEmitter<any>();  

  sendData() {
    const allData = {
      message: 'Hello from child!',      
      number: 42,                    
      isActive: true,                 
      person: { name: 'Alice', age: 25 }, 
      numbers: [1, 2, 3, 4, 5]        
    };

    this.dataEmitter.emit(allData);
  }
}
