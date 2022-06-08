import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientComponent} from "./http-client/http-client.component";
import {PostContactsComponent} from "./post-contacts/post-contacts.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "../shared/auth.guard";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    HttpClientComponent,
    PostContactsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: HttpClientComponent, children: [
          {path: 'extra', component: PostContactsComponent}
      ]}
    ]),
    SharedModule
  ],
  exports: [
    PostContactsComponent,
    RouterModule
  ]
})
export class PageInfoModule { }
