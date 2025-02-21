import { Component, OnInit } from '@angular/core';

import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.scss']
})
export class RecieverComponent implements OnInit{
  message!:string;
  constructor(private shared: Service1Service){ }

  ngOnInit():void{
    this.message = this.shared.getMessage()
  }

}
