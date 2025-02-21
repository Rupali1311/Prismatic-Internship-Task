import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokesRoutingModule } from './jokes-routing.module';
import { JokesTableComponent } from './jokes-table/jokes-table.component';
import { JokesAddComponent } from './jokes-add/jokes-add.component';
import { JokesEditComponent } from './jokes-edit/jokes-edit.component';


@NgModule({
  declarations: [
    JokesTableComponent,
    JokesAddComponent,
    JokesEditComponent
  ],
  imports: [
    CommonModule,
    JokesRoutingModule
  ]
})
export class JokesModule { }
