import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SiteLayoutComponent} from './layouts/site-layout/site-layout.component';
import {HeaderComponent} from './blocks/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderTopComponent} from './blocks/header/components/header-top/header-top.component';
import {HeaderMiddleComponent} from './blocks/header/components/header-middle/header-middle.component';
import {HeaderBottomComponent} from './blocks/header/components/header-bottom/header-bottom.component';
import {MatIconModule} from "@angular/material/icon";
import {MainComponent} from './blocks/main/main.component';
import {FooterComponent} from './blocks/footer/footer.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {
  HeaderTopNavComponentComponent
} from './blocks/header/components/header-top/components/header-top-nav-component/header-top-nav-component.component';
import {
  HeaderTopRightColComponent
} from './blocks/header/components/header-top/components/header-top-right-col/header-top-right-col.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import {
  DialogComponent
} from "./blocks/header/components/header-top/components/header-top-right-col/components/dialog/dialog.component";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";


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
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
