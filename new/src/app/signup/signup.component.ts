import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username: string = '';
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
