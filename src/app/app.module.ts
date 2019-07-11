import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { AddressbookComponent } from './addressbook/addressbook.component';
import { PopupComponent } from './popup/popup.component';
import { AlertsComponent } from './alerts/alerts.component';

import { AdDirective } from './ad/ad.directive';
import { AdBannerComponent } from './ad/ad-banner.component';
import { AdService } from './ad/ad.service';
import { AdJobComponent } from './ad/ad-struct-job.component';
import { AdProfileComponent } from './ad/ad-struct-profile.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AdService],
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    UsersComponent,
    UserComponent,
    AddressbookComponent,
    PopupComponent,
    AlertsComponent,
    AdBannerComponent,
    AdJobComponent,
    AdProfileComponent,
    AdDirective
  ],
  entryComponents: [ AdJobComponent, AdProfileComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
