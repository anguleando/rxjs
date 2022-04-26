import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehavioursubjectComponent } from './components/behavioursubject/behavioursubject.component';
import { HomeComponent } from './components/home/home.component';
import { OperadoresBasicosComponent } from './components/operadores-basicos/operadores-basicos.component';
import { OtherComponent } from './components/other/other.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';

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
    path:'subscriptions',
    component: SubscriptionComponent,
  },
  {
    path:'behaviourSubject',
    component: BehavioursubjectComponent
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
