import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IpinfoTableComponent } from './ipinfo-table/ipinfo-table.component';
import { IpinfoAddComponent } from './ipinfo-add/ipinfo-add.component';
import { IpinfoEditComponent } from './ipinfo-edit/ipinfo-edit.component';

const routes: Routes = [
  {
      path:'',
      component:IpinfoTableComponent
    },
    {
      path:'add',
      component:IpinfoAddComponent
    },
    {
      path:'edit',
      component:IpinfoEditComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IpinfoRoutingModule { }
