import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  diaria = "";
  dias = "";
  valor = 0;
  constructor(public router: Router) {}
    calcularHospedagem(){
      this.valor=parseFloat(this.diaria)*parseFloat(this.dias)
      this.router.navigateByUrl
      (`/confirmar-reserva/${this.diaria}/${this.dias}/${this.valor}`)
    }
}
