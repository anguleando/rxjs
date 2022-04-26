import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Cerveza } from 'src/app/models/cerveza.interface';
import { MyObservableService } from 'src/app/services/my-observable.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit,OnDestroy {

  arrayCervezas: Cerveza[] = [];

  mySub1!: Subscription;
  mySub2!: Subscription;
  mySub3!: Subscription;


  constructor(
    private myObservableService: MyObservableService,
  ) {}

  ngOnInit(): void {}

  observableNormal() {

    // 1 ) CREACION OBSERVABLE BASICO (Creado en un servicio, similar a cuando utilizamos un servicio de http, pero nuestro **********************
    // this.myObservableService.returnMyObserverBasic().subscribe(
    //   x=>{
    //     console.log(x);
    //   }
    // );

    // const obs$: Observable<string> = this.myObservableService.returnMyObserverBasic();

    // // console.log('primer observable');
    // const mySubcription1: Subscription = obs$.subscribe(console.log);
    // console.log('segundo observable');
    // const mySubcription2: Subscription = obs$.subscribe(console.log);
    // console.log('tercer observable');
    // const mySubcription3: Subscription = obs$.subscribe(console.log);

    // CREACION OBSERVABLE BASICO*************************************************************************************************************


    // 2) OBSERVABLE BASICO con subscripcion ****************************************************************************************************
    // CONVERTIR LOS DE ARRIBA EN SUBSCRIPCION!!!!!!!!!!!!!!!!!!!!!!!! const mySubcription1 = obs$.subscribe(console.log);



    // 3) Ver la razon de la necesidad de una subscripcion
    // const obs2$: Observable<number> = this.myObservableService.returnMyObserverInterval();
    // // obs2$.subscribe(x=>console.log(x));

    // const mySub1 = obs2$.subscribe(x=>console.log(x));


    // Lo mismo pero mas grande (con llamadas http de por medio)
    const obs3$ = this.myObservableService.returnMyObserverIntervalHTTP();
    this.mySub1 = obs3$.subscribe(cervezas$ => cervezas$.subscribe( (x:any) => {console.log(x);}));

  }

  observableDessubscribir() {

    // this.mySub1.unsubscribe();

  }

  ngOnDestroy() {

    if (this.mySub1) {
      this.mySub1.unsubscribe();
    }

  }


}
