import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './COMPONENTS/nav-bar/nav-bar.component';
import { NavbarTitleComponent } from './COMPONENTS/navbar-title/navbar-title.component';
import { BigCardComponent } from './COMPONENTS/big-card/big-card.component';
import { SmallCardComponent } from './COMPONENTS/small-card/small-card.component';
import { ContentComponent } from './PAGES/content/content.component';
import { HomeComponent } from './PAGES/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavbarTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
