import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JoelPageComponent } from './components/joel-page/joel-page.component';
import { MerryComponent } from './components/merry/merry.component';

const routes: Routes = [{
  path: "joel",
  component: JoelPageComponent
},
{path:"merry",
component:MerryComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
