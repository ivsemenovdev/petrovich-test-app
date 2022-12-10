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
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';


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
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
