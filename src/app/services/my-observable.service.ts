import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { BehavioursubjectComponent } from '../components/behavioursubject/behavioursubject.component';
import { Cerveza } from '../models/cerveza.interface';
import { BeersService } from './beers.service';

@Injectable({
  providedIn: 'root'
})
export class MyObservableService {

  constructor(private beersService:BeersService) {}

  returnMyObserverBasic(): Observable<string> {
    return new Observable<string>((mySubscriber) => {

      mySubscriber.next('Hola');
      mySubscriber.next('Como estas?');
      // Forzar error:
      // const myError:any = undefined;
      // myError.kk = 'kk';

      mySubscriber.next('adios (voy a ejecutar complete');

      mySubscriber.complete();

      mySubscriber.next('XXXXXXXXX - Comprobar que despues de complete, ya no llega esto');
    });
  }

  returnMyObserverInterval() {

    return new Observable<number>((mySubscriber) => {

      const randomId = setInterval(
        () => mySubscriber.next( Math.random() ), 2000
      );

      return () => clearInterval(randomId);

    });

  }

  returnMyObserverIntervalHTTP() {

    const getHTTPBeers = ()=>{
      return this.beersService.getCervezas();
    }

    return new Observable<any>((mySubscriber) => {

      const randomId = setInterval(
        () => mySubscriber.next( getHTTPBeers() ), 2000
      );

      return () => clearInterval(randomId);

    });

  }



}
