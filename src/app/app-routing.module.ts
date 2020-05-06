import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './component/principal/principal.component';


const routes: Routes = [
  {path: '',redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio',component:PrincipalComponent},
  { path: '**', component:PrincipalComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
