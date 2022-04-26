import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OtherComponent } from './components/other/other.component';
import { OperadoresBasicosComponent } from './components/operadores-basicos/operadores-basicos.component';
import { BehavioursubjectComponent } from './components/behavioursubject/behavioursubject.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtherComponent,
    OperadoresBasicosComponent,
    BehavioursubjectComponent,
    SubscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
