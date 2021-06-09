import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PremiumRoutingModule } from './premium-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetComponent } from './components/reset/reset.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PremiumRoutingModule
  ],
  exports:[
    LoginComponent,
    ResetComponent,
    RegisterComponent,
  ]
})
export class PremiumModule { }
