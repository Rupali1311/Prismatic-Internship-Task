import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {             
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  // Password Toggle Function
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // Form Submit Function
  onSubmit(form: any) {
    if (form.valid) {
      console.log("Form Submitted!", form.value);
      alert('Form submitted successfully');
    }
  }
}
