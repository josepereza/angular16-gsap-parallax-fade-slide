import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParallaxComponent } from './parallax/parallax.component';
import { SlideComponent } from './slide/slide.component';
import { FadeComponent } from './fade/fade.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/home', pathMatch: 'full'
  },
  {
   path:'home', component:HomeComponent
  },
  {
    path: 'parallax',
    component: ParallaxComponent
  },
  {
    path: 'slide',
    component: SlideComponent
  },
  {
    path: 'fade',
    component: FadeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
