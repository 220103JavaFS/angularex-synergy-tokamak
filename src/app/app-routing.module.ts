import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BERHEProfileComponent } from './components/berhe-profile/berhe-profile.component';
import { EdwinComponent } from './components/edwin/edwin.component';
import { JoelPageComponent } from './components/joel-page/joel-page.component';
import { MattPageComponent } from './components/matt-page/matt-page.component';
import { MerryComponent } from './components/merry/merry.component';
import { RogersComponent } from './components/rogers/rogers.component';

const routes: Routes = [{
  path: "joel",
  component: JoelPageComponent
},
{path:"merry",
component:MerryComponent},
{path:"matt",
component:MattPageComponent},
{path:"roger",
component:RogersComponent}, 
{path:"edwin", 
component:EdwinComponent},
{path:"berhe", 
component:BERHEProfileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
