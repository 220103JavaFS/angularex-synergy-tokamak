import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JoelPageComponent } from './components/joel-page/joel-page.component';
import { FormsModule } from '@angular/forms';
import { BERHEProfileComponent } from './berhe-profile/berhe-profile.component';
import { MerryComponent } from './components/merry/merry.component';

@NgModule({
  declarations: [
    AppComponent,
    JoelPageComponent,
    BERHEProfileComponent,
    MerryComponent,
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
