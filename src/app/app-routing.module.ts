import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header-component/header.component';
import { PagenotfoundComponent } from './pagenotfound-component/pagenotfound.component';

const routes: Routes = [
  {path:'', redirectTo:'', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
