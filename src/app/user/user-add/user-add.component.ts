import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {
  @Input() user: any = null;
  @Input() isEditMode: boolean = false;
  @Output() saveUserEvent = new EventEmitter<any>();
  @Output() cancelEditEvent = new EventEmitter<void>();

  userForm!: FormGroup;
  usersList: any[] = []; // Store the users list

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    // Initialize the form
    this.userForm = this.fb.group({
      id:['',[Validators.required,Validators.maxLength(3),Validators.min(1),Validators.max(100)]],
      title: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      city: ['', Validators.required],
      country: ['', Validators.required]
    });

    // Load existing users from localStorage
    this.loadUsers();

    // If in edit mode, patch the form with existing user data
    if (this.user) {
      this.isEditMode = true;
      this.userForm.patchValue({
        title: this.user.name.title,
        firstName: this.user.name.first,
        lastName: this.user.name.last,
        gender: this.user.gender,
        email: this.user.email,
        dob: this.user.dob.date,
        age: this.user.dob.age,
        phone: this.user.phone,
        city: this.user.location.city,
        country: this.user.location.country
      });
    }
  }

  loadUsers() {
    this.usersList = JSON.parse(localStorage.getItem('usersList') || '[]');
  }

  saveUser() {
    if (this.userForm.invalid) {
      return;
    }

    // Build user object
    const newUser = {
      name: {
        title: this.userForm.value.title,
        first: this.userForm.value.firstName,
        last: this.userForm.value.lastName
      },
      gender: this.userForm.value.gender,
      email: this.userForm.value.email,
      dob: { date: this.userForm.value.dob, age: this.userForm.value.age },
      phone: this.userForm.value.phone,
      location: { city: this.userForm.value.city, country: this.userForm.value.country },
      picture: this.user?.picture || { thumbnail: 'default-image.jpg' }
    };

    if (this.isEditMode) {
      // Find index of the user being edited
      const index = this.usersList.findIndex(u => u.email === this.user.email);
      if (index !== -1) {
        this.usersList[index] = newUser; // Update user in array
      }
    } else {
      this.usersList.push(newUser); // Add new user
    }

    // Save updated list to localStorage
    localStorage.setItem('usersList1', JSON.stringify(this.usersList));

    console.log('Saved User:', newUser);

    // Emit the updated list to the parent component
    this.saveUserEvent.emit(this.usersList);

    // Navigate back to the user table
    this.router.navigate(['user']);
  }

  cancel() {
    // Emit a cancel event to hide the form
    this.cancelEditEvent.emit();
    this.router.navigate(['user']);
  }


}
