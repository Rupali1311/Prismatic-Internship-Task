import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {
  onFormSubmit(form: any): void {
    if (form.valid) {
      // Form is valid, handle submission logic
      console.log('Form Submitted!', form.value);
    } else {
      // Form is invalid, display errors
      console.log('Form is invalid, please check the fields.');
    }
  }

  
}
