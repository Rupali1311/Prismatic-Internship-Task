import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  userForm!: FormGroup;
  usersList: any[] = [];
  userId: number | null = null;
  user: any = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
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

    this.loadUsers();

    // Get userId from route params
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.userId = parseInt(idParam, 10);
        this.loadUserData();
      }
    });
  }

  loadUsers() {
    this.usersList = JSON.parse(localStorage.getItem('usersList1') || '[]');
  }

  loadUserData() {
    if (this.userId !== null) {
      this.user = this.usersList.find(u => u.id === this.userId);
      if (this.user) {
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
  }

  saveUser() {
    if (this.userForm.invalid) {
      return;
    }

    const updatedUser = {
      id: this.userId,
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

    const index = this.usersList.findIndex(u => u.id === this.userId);
    if (index !== -1) {
      this.usersList[index] = updatedUser;
    }

    localStorage.setItem('usersList1', JSON.stringify(this.usersList));

    console.log('Updated User:', updatedUser);

    this.router.navigate(['user']);
  }

  cancel() {
    this.router.navigate(['user']);
  }
}
