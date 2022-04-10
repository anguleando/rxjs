import { Component, OnInit } from '@angular/core';
import { Cerveza } from 'src/app/models/cerveza.interface';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arrayCervezas: Cerveza[] = [];

  constructor(
    private beersService: BeersService,
  ) { }

  ngOnInit(): void {
  }

  onGetCervezas() {

    console.log('entro en onGetCervezas');

    this.beersService.getCervezas()
    .subscribe(
      res =>  {
        this.arrayCervezas = res;
        console.log('EN subscribe FINAL - Recivo resp: ', res);

    });

  }

}
