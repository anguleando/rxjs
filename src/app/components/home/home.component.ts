import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/api-cervezas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private vehicleService: VehicleService,
  ) { }

  ngOnInit(): void {
  }

  onGetCervezas() {

    console.log('entro en onGetCervezas');

    this.vehicleService.getCervezas()
    .subscribe(
      res => console.log(res)
    );

  }

}
