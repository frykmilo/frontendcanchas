import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { PrivateLayoutComponent } from './private/layout/private-layout/private-layout.component';
import { OthersComponent } from './private/others/others.component';
import { PublicLayoutComponent } from './public/layout/public-layout/public-layout.component';
import { RegistroSeComponent } from './public/registro-se/registro-se.component';

const routes: Routes = [

  {
          path: 'secure',
          component: PrivateLayoutComponent,
          children: [
            {path:'dashboard', component: DashboardComponent},
            {path: 'others', component: OthersComponent},
            {path: '**', redirectTo: 'dashboard'}
          ]
  },

  {
    path: 'public',
    component: PublicLayoutComponent,
    children: [
      {path:'registroSe', component: RegistroSeComponent},
      {path: '**', redirectTo: 'dashboard'}
      
    ]
},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
