import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LostComponent } from './lost/lost.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './services/api.service';
import { ErrorComponent } from './error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    LostComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
