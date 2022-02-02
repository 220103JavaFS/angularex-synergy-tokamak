import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JoelPageComponent } from './components/joel-page/joel-page.component';
import { FormsModule } from '@angular/forms';
import { MattPageComponent } from './components/matt-page/matt-page.component';

@NgModule({
  declarations: [
    AppComponent,
    JoelPageComponent,
    MattPageComponent,
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
