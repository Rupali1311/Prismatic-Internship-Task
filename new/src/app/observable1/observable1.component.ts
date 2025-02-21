import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.scss']
})
export class Observable1Component {
  data:any[]=[];

  //observable(Event Emitter)
  myObservable =  new Observable((observer) =>{
    observer.next([1,2,3,4,5]);
  } );

  //observer(Event Listener)
  getData(){
    this.myObservable.subscribe((value:any) => {
      this.data = value;
    });
  }
}
