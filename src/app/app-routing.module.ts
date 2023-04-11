import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LostComponent } from './lost/lost.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'lost', component: LostComponent },
  { path: '*', component: ErrorComponent},
  { path: '', component: HomeComponent},
  { path: ':id', component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
