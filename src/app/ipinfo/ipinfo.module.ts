import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IpinfoRoutingModule } from './ipinfo-routing.module';
import { IpinfoTableComponent } from './ipinfo-table/ipinfo-table.component';
import { IpinfoAddComponent } from './ipinfo-add/ipinfo-add.component';
import { IpinfoEditComponent } from './ipinfo-edit/ipinfo-edit.component';


@NgModule({
  declarations: [
    IpinfoTableComponent,
    IpinfoAddComponent,
    IpinfoEditComponent
  ],
  imports: [
    CommonModule,
    IpinfoRoutingModule
  ]
})
export class IpinfoModule { }
