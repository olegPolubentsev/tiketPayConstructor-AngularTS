import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactLocation} from "./page.contactsAndLocation/page.contactsAndLocation";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ContactLocation
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ContactLocation}
    ]),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ContactLocation,
    RouterModule
  ]
})
export class PageContactModule { }
