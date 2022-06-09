import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PayTicketComponent} from "./pay-ticket/pay-ticket.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { DynamicComponent } from './pay-ticket/dynamic/dynamic.component';
import {MapComponent} from "./pay-ticket/map/map.component";
import { ButtonHouseComponent } from './pay-ticket/map/button-house/button-house.component';
import { UsersComponent } from './pay-ticket/users/users.component';
import { PayComponent } from './pay-ticket/pay/pay.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatCommonModule, MatOptionModule} from "@angular/material/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { MapAdminComponent } from './pay-ticket/map/map-admin/map-admin.component';



@NgModule({
  declarations: [
    PayTicketComponent,
    DynamicComponent,
    MapComponent,
    ButtonHouseComponent,
    UsersComponent,
    PayComponent,
    MapAdminComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ //используем forChild тк указываем непосредственно в модуле, а не в отдельном модуле
      path: '',
      component: PayTicketComponent
      //canActivate:[AuthGuard]
      }
    ]),
    MatSliderModule,
    MatCommonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ],
  exports: [
    RouterModule,
    PayTicketComponent
  ]
})
export class PagePayModule { }
