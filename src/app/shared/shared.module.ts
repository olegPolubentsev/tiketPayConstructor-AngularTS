import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StyleFieldMessageDirective} from "./directives/style-field-message.directive";
import {TelFormatPipe} from "./pipes/tel-format.pipe";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    StyleFieldMessageDirective,
    TelFormatPipe
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [
    HttpClientModule,
    StyleFieldMessageDirective,
    TelFormatPipe
  ]
})
export class SharedModule { }
