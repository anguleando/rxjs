import { Component, OnInit } from '@angular/core';
import { Cerveza } from 'src/app/models/cerveza.interface';
import { VehicleService } from 'src/app/services/api-cervezas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arrayCervezas: Cerveza[] = [];

  constructor(
    private vehicleService: VehicleService,
  ) { }

  ngOnInit(): void {
  }

  onGetCervezas() {

    console.log('entro en onGetCervezas');

    this.vehicleService.getCervezas()
    .subscribe(
      res =>   this.arrayCervezas = res
    );

  }

}
