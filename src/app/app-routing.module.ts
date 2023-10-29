import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './layout/acceuil/acceuil.component';
import { ForgetpComponent } from './layout/connexion/forgetp/forgetp.component';
import { SignupComponent } from './layout/connexion/signup/signup.component';
import { LoginComponent } from './layout/connexion/login/login.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { PosterPComponent } from './default/poster-p/poster-p.component';
import { MyprojectsComponent } from './default/myprojects/myprojects.component';
import { BoardComponent } from './default/board/board.component';
import { HistoryComponent } from './default/history/history.component';
import { AskhelpComponent } from './default/askhelp/askhelp.component';
import { MyprojectsFComponent } from './default/myprojects-f/myprojects-f.component';
import { BoardFComponent } from './default/board-f/board-f.component';
import { RecherchepComponent } from './default/recherchep/recherchep.component';
import { ProfileCComponent } from './default/profile-c/profile-c.component';



const routes: Routes = [{ 
  path:'',component:DashboardComponent,
    children:[
      {path:'poster',component:PosterPComponent},
      {path:'myprojects',component:MyprojectsComponent}, 
      {path:'Board',component:BoardComponent}  , 
      {path:'history',component:HistoryComponent}  ,
      {path:'Askhelp',component:AskhelpComponent} ,
      {path:'myprojectsF',component:MyprojectsFComponent} ,
      {path:'BoardF',component:BoardFComponent} ,      
      {path:'Recherchep',component:RecherchepComponent} ,
      {path:'ProfileC',component:ProfileCComponent} ,
     
    ]},
  {path:'acceuil',component:AcceuilComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'forget',component:ForgetpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
