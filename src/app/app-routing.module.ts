import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OperadoresBasicosComponent } from './components/operadores-basicos/operadores-basicos.component';
import { OtherComponent } from './components/other/other.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'other',
    component: OtherComponent
  },
  {
    path:'operadores-basico',
    component: OperadoresBasicosComponent
  },
  {
    path:'**',
    redirectTo: '/home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
