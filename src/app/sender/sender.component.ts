import { Component, OnInit } from '@angular/core';
// import { SharedService } from '../shared.service'
@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit {
  // constructor(private shared: SharedService){ }

  // message= "Hey I am Sender component"

  ngOnInit():void{
    // this.shared.setMessage(this.message)
  }

}
