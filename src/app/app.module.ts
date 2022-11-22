import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { HeaderComponent } from './blocks/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderTopComponent } from './blocks/header/components/header-top/header-top.component';
import { HeaderMiddleComponent } from './blocks/header/components/header-middle/header-middle.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    HeaderComponent,
    HeaderTopComponent,
    HeaderMiddleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
