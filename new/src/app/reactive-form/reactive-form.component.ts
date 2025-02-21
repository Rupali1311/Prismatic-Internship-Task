import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent  {
  
  loginForm: FormGroup;
  constructor() {
    
    this.loginForm = new FormGroup({
      'username': new FormControl(null,Validators.required ),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required )
    });
  }


  onSubmit() {
    console.log(this.loginForm);
  }
}
