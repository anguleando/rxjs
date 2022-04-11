import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cerveza } from 'src/app/models/cerveza.interface';

@Component({
  selector: 'app-behavioursubject',
  templateUrl: './behavioursubject.component.html',
  styleUrls: ['./behavioursubject.component.scss'],
})
export class BehavioursubjectComponent implements OnInit {
  arrayCervezas: Cerveza[] = [];

  constructor() {}

  ngOnInit(): void {}

  observableNormal() {
    const obs$ = new Observable<string>((mySubscriber) => {
      mySubscriber.next('Hola');
      mySubscriber.next('Como estas?');
      // Forzar error:
      // const myError:any = undefined;
      // myError.kk = 'kk';

      mySubscriber.next('adios');

      mySubscriber.complete();

      mySubscriber.next('XXXXXXXXX');
    });

    console.log('primer observable');
    obs$.subscribe(console.log);

    console.log('segundo observable');
    obs$.subscribe(console.log);

    console.log('tercer observable');
    obs$.subscribe(console.log);


    const obs2$ = new Observable<number>((mySubscriber) => {

      const randomId = setInterval(
        () => mySubscriber.next( Math.random() ), 2000
      );

      return () => clearInterval(randomId);

    });

    console.log('primer observable');
    const mySub1 = obs2$.subscribe(nunRandom => console.log('mySub1', nunRandom));

    console.log('segundo observable');
    const mySub2 = obs2$.subscribe(nunRandom => console.log('mySub2', nunRandom));

    console.log('tercer observable');
    const mySub3 = obs2$.subscribe(nunRandom => console.log('mySub3', nunRandom));

  }
}
