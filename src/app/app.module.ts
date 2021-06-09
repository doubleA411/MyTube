import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from "ng-sidebar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { TourismComponent } from './tourism/tourism.component';
import { TubeComponent } from './tube/tube.component';
import { TrendingComponent } from './trending/trending.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AccountComponent } from './account/account.component';
import { PremiumComponent } from './premium/premium.component';
import { LoginComponent } from './premium/components/login/login.component';
import { RegisterComponent } from './premium/components/register/register.component';
import { ResetComponent } from './premium/components/reset/reset.component';
@NgModule({
  declarations: [
    AppComponent,
    TourismComponent,
    TubeComponent,
    TrendingComponent,
    FooterComponent,
    HeaderComponent,
    AccountComponent,
    PremiumComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
