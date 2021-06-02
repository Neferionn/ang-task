import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ZoneComponent } from './mainpage/zone/zone.component';
import { PrimarySquareComponent } from './mainpage/zone/primary-square/primary-square.component';
import { SecondarySquareComponent } from './mainpage/zone/secondary-square/secondary-square.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ZoneComponent,
    PrimarySquareComponent,
    SecondarySquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
