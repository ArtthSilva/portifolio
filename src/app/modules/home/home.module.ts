import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseToTopicsComponent } from './components/browse-to-topics/browse-to-topics.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LeftButtonComponent } from './components/left-button/left-button.component';
import { MusicBarComponent } from './components/music-bar/music-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';

import { LucideAngularModule, ChevronLeft,ChevronRight } from 'lucide-angular';
import { ButtonPerfilComponent } from './components/button-perfil/button-perfil.component';


@NgModule({
  declarations: [
    BrowseToTopicsComponent,
    HomeComponent,
    SidebarComponent,
    LeftButtonComponent,
    MusicBarComponent,
    HomePageComponent,
    NavbarComponent,
    ButtonPerfilComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    LucideAngularModule.pick({ ChevronLeft }),
    LucideAngularModule.pick({ ChevronRight }),
   ]
})
export class HomeModule { }
