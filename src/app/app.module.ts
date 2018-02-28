import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ColoresComponent } from './colores/colores.component';
import { ChaoComponent } from './chao/chao.component';


@NgModule({
  declarations: [
    AppComponent,
    ColoresComponent,
    ChaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
