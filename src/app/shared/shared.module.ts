import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SharedModule { }
