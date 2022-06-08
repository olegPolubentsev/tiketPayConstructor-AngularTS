import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BlockComponent} from "./block/block.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterseptor} from "./page-info/http-client/auth.interseptor";
import {AppRoutingModule} from "./app-routing.module";
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { IndexComponent } from './page-home/index/index.component';
import { LoginComponent } from './pages-service/login/login.component';
import {PagePayModule} from "./page-pay/page-pay.module";
import {SharedModule} from "./shared/shared.module";
import {PageInfoModule} from "./page-info/page-info.module";
import {PageContactModule} from "./page-contact/page-contact.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StyleErrorTextDirective} from "./pages-service/login/styleErrorText.directive";
import { DynamicMesComponent } from './pages-service/login/dynamic-mes/dynamic-mes.component';
import {StyleErrorBackGroundDirective} from "./pages-service/login/dynamic-mes/styleErrorBackGround.directive";
import { MapComponent } from './page-pay/pay-ticket/map/map.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatCommonModule} from "@angular/material/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonHarness} from "@angular/material/button/testing";
import {MatIconModule} from "@angular/material/icon";

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass:AuthInterseptor,
  multi:true
}

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    ErrorPageComponent,
    IndexComponent,
    LoginComponent,
    StyleErrorTextDirective,
    StyleErrorBackGroundDirective,
    DynamicMesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    PagePayModule,
    PageInfoModule,
    PageContactModule,
    SharedModule
  ],
  providers: [
    //INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
