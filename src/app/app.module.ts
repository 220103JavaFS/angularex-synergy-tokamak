import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JoelPageComponent } from './components/joel-page/joel-page.component';
import { FormsModule } from '@angular/forms';
import { MattPageComponent } from './components/matt-page/matt-page.component';

import { BERHEProfileComponent } from './components/berhe-profile/berhe-profile.component';

import { MerryComponent } from './components/merry/merry.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EdwinComponent } from './components/edwin/edwin.component';


@NgModule({
  declarations: [
    AppComponent,
    JoelPageComponent,
    MattPageComponent,
    MerryComponent,
    NavbarComponent,
    BERHEProfileComponent,
    EdwinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
