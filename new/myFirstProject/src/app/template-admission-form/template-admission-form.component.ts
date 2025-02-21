import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomDateFormatPipe } from '../custom-pipes/custom-date-format.pipe';

@Component({
  selector: 'app-template-admission-form',
  templateUrl: './template-admission-form.component.html',
  styleUrls: ['./template-admission-form.component.scss']
})
export class TemplateAdmissionFormComponent {
  dateOfBirth: string = '';
  maxDate: string;

  constructor() {
    const today = new Date();
    this.maxDate = today.toISOString().split('T')[0];
  }

  photoPreview: string | null = null;

  // This function is triggered when a user selects a file
  previewPhoto(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.photoPreview = reader.result as string;  // Set the preview URL
      };
      reader.readAsDataURL(file);
    }
  }

  // Method to handle form submission
  FormSubmit(admissionForm: NgForm): void {
    if (admissionForm.valid) {
      console.log('Form submitted successfully:', admissionForm.value);
      // You can perform your logic here (e.g., send the form data to a backend server)
    } else {
      console.log('Form is invalid');
    }
  }
}
