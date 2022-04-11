import { Component, OnInit } from '@angular/core';
import { filter, from, map, mergeMap, Observer, of, pluck, switchMap, tap, toArray } from 'rxjs';
import { Cerveza } from 'src/app/models/cerveza.interface';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-operadores-basicos',
  templateUrl: './operadores-basicos.component.html',
  styleUrls: ['./operadores-basicos.component.scss']
})
export class OperadoresBasicosComponent implements OnInit {

  arrayCervezas: Cerveza[] = [];

  myObserver: Observer<any> = {
    next: (dato: any) => { // call back
      console.log('NEXT en subscribe - Res:', dato);
      // this.arrayCervezas.push(dato);
    },
    error: (err) => {
      console.log('ERROR EN OBSERVABLE:', err);
    },
    complete: () => {
      console.log('El observer ha sido completado');
    },
  };

  myOperadorBody = (res: any) => {
      console.log('myOperadorBody res:', res);
      return res;
    }

  constructor(
    private beersService: BeersService,
  ) { }

  ngOnInit(): void {
  }

  onGetCervezasTap() {

    console.log('entro en onGetCervezasTap');

    this.beersService.getCervezas().pipe(
      // tap( console.log),

      // // *****************************
      // // FUNCIONAMIENTO NORMAL
      // tap( res =>  {
      //   this.arrayCervezas = res;
      //   console.log('EN subscribe FINAL - Recibo res: ', res);
      // }),
      // // *****************************

      // // PATRON PARA CUALQUIER OPERADOR
      // tap((res: any) => {
      //   console.log(res);
      //   return res;
      // }),

      tap(this.myOperadorBody),

      // tap(res => {
      //   console.log('EN tap - res:', res);
      //   // return res; // Como excecpcion, tap no puede modificar el flujo,
      //   // por tanto no necesita devolver nada.
      //   // Es como si pincharamos un cable y escucharamos que llega
      // }),

      // Ejemplo de "VER POR DONDE VAS"
      // tap ( res => console.log('tap1:', res)),
      // switchMap( res => this.beersService.getCerveza(res[0].id) ),
      // tap ( res => console.log('tap2:', res)),

      // Ejemplo de tomar el valor (similar a como se hace el suscribe)
      // tap(res => {
      //   console.log('EN tap - res:', res);
      //   this.arrayCervezas = res;
      // }),

    )
    .subscribe();
    // .subscribe(this.myObserver);

  }

  onGetCervezasMergeMap() {
    console.log('entro en onGetCervezasMergeMap');

    // this.beersService.getCervezas().pipe()
    // .subscribe(this.myObserver);

    this.beersService.getCervezas().pipe(
      mergeMap( (res) => from(res)),
    )
    .subscribe(this.myObserver);

  }

  onGetCervezasMap() {
    console.log('entro en onGetCervezasMap');

    this.beersService.getCervezas().pipe(
      mergeMap( (res) => from(res)),

      // transformar para quedarnos solo con 1 solo atributo
      map( (cerveza: Cerveza) => cerveza?.name),

      // transformar para quedarnos solo con 1 solo atributo de uno de los 'sub'objetos que tiene el objeto (objeto 'ingredients' en este caso)
      // map( (cerveza: Cerveza) => cerveza?.ingredients?.yeast ),

      // transformar para añadirles en el nombre la id
      // Fijarse que así solo devuelve en nombre
      // map( (cerveza: Cerveza) => cerveza.name = `${cerveza.name} (${cerveza.id})` ),

      // map( (cerveza: Cerveza) => {
      //   cerveza.name = `${cerveza.name} (${cerveza.id})`;
      //   return cerveza;
      // }),

    )
    .subscribe(this.myObserver);
  }

  onGetCervezasPluck() {
    // NO MIRAR DEPRECATED
    console.log('entro en onGetCervezasPluck');
    // https://rxjs.dev/api/operators/pluck

    this.beersService.getCervezas().pipe(
      mergeMap( (res) => from(res)),

      // // transformar para quedarnos solo con 1 atributo
      // pluck('name'),

      // transformar para quedarnos solo con 1 atributo
      pluck('ingredients', 'yeast'),
    )
    .subscribe(this.myObserver);
  }

  onGetCervezasFilter() {
    console.log('entro en onGetCervezasPluck');

    // NOTA!!!!!! Fijarse que getCervezasImproved ya no necesita el mergemap
    this.beersService.getCervezasImproved().pipe(
      filter( cerveza => cerveza.name.startsWith('AB')),
    )
    .subscribe(this.myObserver);

  }

  onGetCervezasCadenasDeOperadores() {
    console.log('entro en onGetCervezasCadenasDeOperadores');

    // NOTA!!!!!! Fijarse que getCervezasImproved ya no necesita el mergemap
    this.beersService.getCervezasImproved().pipe(
      filter( cerveza => cerveza.name.startsWith('AB')),
      map( cerveza => cerveza.name ),
      map( nombres => 'TODOS EMPIEZAN POR AB: ' + nombres),
      filter( nombres => nombres.endsWith('4')),
    )
    .subscribe(this.myObserver);

  }
}
