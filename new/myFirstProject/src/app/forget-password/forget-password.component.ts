import { Component } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  email: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted:', this.email);
      alert('Password reset link sent to your email!');
    }
  }
}



