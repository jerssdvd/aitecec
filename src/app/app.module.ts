import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { MisionComponent } from './components/mision/mision.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    ServiciosComponent,
    ProyectosComponent,
    MisionComponent,
    EquipoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
