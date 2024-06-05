import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent // Importa AppComponent aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
