import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

// ./modules/app-routing.module
import { AppRoutingModule } from './modules/app-routing.module';
import { MaterialModule } from './modules/material.module';
// 

// components
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
// 

// pipes
// 

// services
import { GameService } from './services/game.service';
// 

@NgModule({
  declarations: [
    // components
    AppComponent,
    IndexComponent,
    // 
    // pipes
    // 
  ],
  imports: [
    // modules
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    // 
  ],
  providers: [
    // services
    GameService
    // 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
