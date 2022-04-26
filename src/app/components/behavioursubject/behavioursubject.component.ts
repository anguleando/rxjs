import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subscription } from 'rxjs';
import { Cerveza } from 'src/app/models/cerveza.interface';
import { MyObservableService } from 'src/app/services/my-observable.service';

@Component({
  selector: 'app-behavioursubject',
  templateUrl: './behavioursubject.component.html',
  styleUrls: ['./behavioursubject.component.scss'],
})
export class BehavioursubjectComponent implements OnInit {
  arrayCervezas: Cerveza[] = [];

  mySub1!: Subscription;
  mySub2!: Subscription;
  mySub3!: Subscription;

  private cervezasSource$ = new BehaviorSubject<Cerveza[] | null>(null);
  cervezas$ = this.cervezasSource$.asObservable();

  constructor(private myObservableService: MyObservableService) {}

  ngOnInit(): void {}

  observableNormal() {

    // const myObserver: Observer<any> = {
    //   next: (dato: any) => { // call back
    //     console.log('NEXT en subscribe - Res:', dato);
    //     // this.arrayCervezas.push(dato);
    //   },
    //   error: (err) => {
    //     console.log('ERROR EN OBSERVABLE:', err);
    //   },
    //   complete: () => {
    //     console.log('El observer ha sido completado');
    //   },
    // };

    const myBehaviourSubject$ = new BehaviorSubject(666);

    const obs$: Observable<number> =
      this.myObservableService.returnMyObserverInterval();

    console.log('primer observable');
    this.mySub1 = obs$.subscribe((nunRandom) =>
      console.log('mySub1', nunRandom)
    );



    console.log('segundo observable');
    this.mySub2 = obs$.subscribe((nunRandom) =>
      console.log('mySub2', nunRandom)
    );

    console.log('tercer observable');
    this.mySub3 = obs$.subscribe((nunRandom) =>
      console.log('mySub3', nunRandom)
    );
  }

  observableDessubscribir() {
    this.mySub1.unsubscribe();
    this.mySub2.unsubscribe();
    this.mySub3.unsubscribe();
  }

  behaviourSub() {
    // Es un observer:
    const obs$: Observable<number> =
      this.myObservableService.returnMyObserverInterval();

    const myBehaviourSubject$ = new BehaviorSubject(666);
    obs$.subscribe(myBehaviourSubject$);

    console.log('primer observable');
    this.mySub1 = myBehaviourSubject$.subscribe((nunRandom) =>
      console.log('mySub1', nunRandom)
    );

    console.log('segundo observable');
    this.mySub2 = myBehaviourSubject$.subscribe((nunRandom) =>
      console.log('mySub2', nunRandom)
    );

    console.log('tercer observable');
    this.mySub3 = myBehaviourSubject$.subscribe((nunRandom) =>
      console.log('mySub3', nunRandom)
    );
  }

  set cervezas(data: Cerveza[] | null) {
    this.cervezasSource$.next(data);
  }

  get cervezas() {
    return this.cervezasSource$.value;
  }

  ejemplBorrarTabla() {

    const ejemploListaCervezasEnMitabla = this.cervezas;

    this.cervezas = null;



  }


}
