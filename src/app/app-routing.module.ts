import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './premium/components/login/login.component';
import { RegisterComponent } from './premium/components/register/register.component';
import { ResetComponent } from './premium/components/reset/reset.component';
import { PremiumComponent } from './premium/premium.component';
import { TourismComponent } from './tourism/tourism.component';
import { TrendingComponent } from './trending/trending.component';
import { TubeComponent } from './tube/tube.component';

const routes: Routes = [
  {path : "", pathMatch : 'full' , redirectTo : "/Tube"},
  {path:"Tourism", component: TourismComponent},
  {path: "Tube", component: TubeComponent},
  {path:"Trending",component:TrendingComponent},
  {path:"Premium",component:PremiumComponent},
  {path:"Login",component:LoginComponent},
  {path:"Reset",component:ResetComponent},
  {path:"Register",component:RegisterComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
