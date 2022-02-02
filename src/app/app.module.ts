import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JoelPageComponent } from './components/joel-page/joel-page.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { MattPageComponent } from './components/matt-page/matt-page.component';
=======
import { BERHEProfileComponent } from './berhe-profile/berhe-profile.component';
>>>>>>> fc870a98fb95b766d29a5f65c26fb1a7f9a9e853

@NgModule({
  declarations: [
    AppComponent,
    JoelPageComponent,
<<<<<<< HEAD
    MattPageComponent,
=======
    BERHEProfileComponent,
>>>>>>> fc870a98fb95b766d29a5f65c26fb1a7f9a9e853
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
