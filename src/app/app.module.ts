import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { HeaderComponent } from './blocks/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderTopComponent } from './blocks/header/components/header-top/header-top.component';
import { HeaderMiddleComponent } from './blocks/header/components/header-middle/header-middle.component';
import { HeaderBottomComponent } from './blocks/header/components/header-bottom/header-bottom.component';
import { MatIconModule } from '@angular/material/icon';
import { MainComponent } from './blocks/main/main.component';
import { FooterComponent } from './blocks/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  HeaderTopNavComponentComponent
} from './blocks/header/components/header-top/components/header-top-nav-component/header-top-nav-component.component';
import {
  HeaderTopRightColComponent
} from './blocks/header/components/header-top/components/header-top-right-col/header-top-right-col.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import {
  DialogComponent
} from './blocks/header/components/header-top/components/header-top-right-col/components/dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitiesService } from './services/cities.service';
import { CitiesSearchService } from './services/cities-search.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AuthComponent } from './blocks/auth/auth.component';
import { HeaderMiddleLeftColComponent } from './blocks/header/components/header-middle/components/header-middle-left-col/header-middle-left-col.component';
import { HeaderMiddleRightColComponent } from './blocks/header/components/header-middle/components/header-middle-right-col/header-middle-right-col.component';
import { BannerComponent } from './blocks/main/components/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    HeaderComponent,
    HeaderTopComponent,
    HeaderMiddleComponent,
    HeaderBottomComponent,
    MainComponent,
    FooterComponent,
    HeaderTopNavComponentComponent,
    HeaderTopRightColComponent,
    DialogComponent,
    AuthComponent,
    HeaderMiddleLeftColComponent,
    HeaderMiddleRightColComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ],
  providers: [CitiesService, CitiesSearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
