import { Component } from '@angular/core';
import { userType} from '../models/user';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent {

  userData:userType ={
    name:"rupali",
    age: 23,
    address: "alandi",
    phone_no:2345678901

  }

}
