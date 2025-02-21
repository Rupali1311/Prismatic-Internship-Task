import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';
import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit, AfterViewInit {
  users: any[] = [];
  selectedUser: any = null;
  selectedUsers: any[] = [];
  displayedColumns: string[] = ['select', 'photo', 'name', 'gender', 'email', 'dob', 'age', 'phone', 'location', 'actions'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userData: UserDataService, private router: Router, public dialog: MatDialog) {}

  ngOnInit() {
    this.loadUsersFromLocalStorage();
    this.fetchUsersFromApi();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadUsersFromLocalStorage() {
    const localStorageUsers = JSON.parse(localStorage.getItem('usersList1') || '[]');
    this.users = localStorageUsers;
    this.dataSource.data = this.users;
  }

  fetchUsersFromApi() {
    this.userData.users().subscribe(
      (data: any) => {
        if (data?.results) {
          const apiUsers = data.results.map((user: any, index: number) => ({
            id: index + 1,
            name: user.name,
            gender: user.gender,
            email: user.email,
            dob: { date: user.dob.date, age: user.dob.age },
            phone: user.phone,
            location: user.location,
            picture: user.picture
          }));

          const localStorageUsers = JSON.parse(localStorage.getItem('usersList1') || '[]');
          const mergedUsers = this.mergeUsersByEmail(localStorageUsers, apiUsers);

          localStorage.setItem('usersList1', JSON.stringify(mergedUsers));

          this.users = mergedUsers;
          this.dataSource.data = this.users;
        }
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  mergeUsersByEmail(localUsers: any[], apiUsers: any[]): any[] {
    const mergedMap = new Map();

    localUsers.forEach(user => mergedMap.set(user.email, user));
    apiUsers.forEach(user => {
      if (!mergedMap.has(user.email)) {
        mergedMap.set(user.email, user);
      }
    });

    return Array.from(mergedMap.values());
  }

  addUser() {
    this.router.navigate(['user/add']);
  }

  editUser(user: any) {
    this.router.navigate(['user/edit', user.email]); // Pass email as unique identifier
  }

  toggleSelection(user: any) {
    user.selected = !user.selected;
    this.selectedUsers = this.users.filter(u => u.selected);
  }

  deleteSelectedUsers() {
    this.users = this.users.filter(user => !user.selected);
    this.updateLocalStorage();
  }

  confirmDelete(user: any) {
    this.selectedUser = user;
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteUser();
      }
    });
  }

  deleteUser() {
    if (this.selectedUser) {
      this.users = this.users.filter(u => u.email !== this.selectedUser.email);
      this.updateLocalStorage();
      this.selectedUser = null;
    }
  }

  updateLocalStorage() {
    localStorage.setItem('usersList1', JSON.stringify(this.users));
    this.dataSource.data = this.users;
  }
}
