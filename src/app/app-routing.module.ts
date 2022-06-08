import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ErrorPageComponent} from "./shared/error-page/error-page.component";
import {IndexComponent} from "./page-home/index/index.component";
import {LoginComponent} from "./pages-service/login/login.component";
import {PostContactsComponent} from "./page-info/post-contacts/post-contacts.component";

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: 'info', loadChildren: () => import('./page-info/page-info.module').then(m => m.PageInfoModule)},
  {path: 'pay', loadChildren: () => import('./page-pay/page-pay.module').then(m => m.PagePayModule)},
  {path: 'contact', loadChildren: () => import('./page-contact/page-contact.module').then(m => m.PageContactModule)},

 // {path: '**', redirectTo: '/error'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
