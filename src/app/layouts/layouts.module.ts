import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AssideComponent } from './asside/asside.component';
import { LeftSidebarComponent } from './asside/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './asside/right-sidebar/right-sidebar.component';
import { LogoComponent } from './header/logo/logo.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { BannersComponent } from './header/banners/banners.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainComponent, AssideComponent, LeftSidebarComponent, RightSidebarComponent, LogoComponent, NavbarComponent, BannersComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
