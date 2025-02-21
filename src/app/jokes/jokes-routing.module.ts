import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesTableComponent } from './jokes-table/jokes-table.component';
import { JokesAddComponent } from './jokes-add/jokes-add.component';
import { JokesEditComponent } from './jokes-edit/jokes-edit.component';

const routes: Routes = [
  {
      path:'',
      component:JokesTableComponent
    },
    {
      path:'add',
      component:JokesAddComponent
    },
    {
      path:'edit',
      component:JokesEditComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokesRoutingModule { }
