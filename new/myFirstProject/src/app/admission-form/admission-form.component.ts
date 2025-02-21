import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.scss']
})
export class AdmissionFormComponent {
  
  maxDate: string;

  constructor() {
    // Set maxDate to today's date to disable future dates
    const today = new Date();
    this.maxDate = today.toISOString().split('T')[0];
  }

  admissionForm = new FormGroup({
    studentName: new FormControl('', [
      Validators.required, 
      Validators.pattern('^[A-Za-z][A-Za-z ]*$'), 
      Validators.minLength(3)
    ]),
    fatherName: new FormControl('', [
      Validators.required, 
      Validators.pattern('^[A-Za-z ]+$'), 
      Validators.minLength(3)
    ]),
    guardianNic: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    religion: new FormControl('Muslim', Validators.required),
    gender: new FormControl('Male', Validators.required),
    studentBayForm: new FormControl('', Validators.required),
    class: new FormControl('Play Group', Validators.required),
    guardianMobileNo: new FormControl('', [
      Validators.required, 
      Validators.pattern('^[0-9]{10}$')
    ]),
    ptclNo: new FormControl(''),
    permanentAddress: new FormControl('', Validators.required),
    guardianSignature: new FormControl('', Validators.required),
    bayForm: new FormControl(false),
    nicCopy: new FormControl(false),
    pictures: new FormControl(false)
  });

  photoPreview: string | ArrayBuffer | null = null;

uploadPhoto() {
  const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
  fileInput.click();
}

previewPhoto(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      this.photoPreview = reader.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}
  
        
  isFormInvalid() {
    return this.admissionForm.invalid;
  }

  FormSubmit() {
    if (this.admissionForm.valid) {
    
      alert("Form submitted successfully!");
      console.log(this.admissionForm.value);
      console.log("Studnet Name:",this.admissionForm.value.studentName);
      console.log("Student name:", this.admissionForm.get('studentName')?.value);
      
    }
  }

  onReset(){
    this.admissionForm.reset();
  }


  
}
