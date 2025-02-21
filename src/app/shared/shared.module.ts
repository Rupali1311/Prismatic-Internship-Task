import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    PaginatorComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  exports: [
    PaginatorComponent,
    DeleteDialogComponent
  ]
})
export class SharedModule { }
