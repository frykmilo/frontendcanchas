import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateLayoutComponent } from './private/layout/private-layout/private-layout.component';
import { NavbarComponent } from './private/layout/navbar/navbar.component';
import { FooterComponent } from './private/layout/footer/footer.component';
import { ModalComponent } from './private/layout/modal/modal.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { OthersComponent } from './private/others/others.component';
import { RegistroSeComponent } from './public/registro-se/registro-se.component';
import { PublicLayoutComponent } from './public/layout/public-layout/public-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    PrivateLayoutComponent,
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    DashboardComponent,
    OthersComponent,
    RegistroSeComponent,
    PublicLayoutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
