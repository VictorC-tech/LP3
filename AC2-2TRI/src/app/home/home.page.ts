import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mes1 = 0;
  mes2 = 0;
  mes3 = 0;
  mes4 = 0;
  media = (this.mes1 + this.mes2 + this.mes3 + this.mes4) / 4;
  plantas = "";
  constructor(public router: Router) {}
    indicarPlantas(){
      if(this.media < -15){
        this.plantas="Nenhuma planta cadastrada sobrevive a esse frio";
      }
      if(this.media >= -15){
        this.plantas="Nós recomendamos Uva e Figo";
      }else if(this.media >= -10){
        this.plantas="Nós recomendamos Morango, Kiwi e Romã";
      } else if(this.media >= -2){
        this.plantas="Nós recomendamos Laranja, Tangerina, Abacate e Manga";
      } else if(this.media >= 10){
        this.plantas="Nós recomendamos Limão, Limão Siciliano, Limão Tahiti, Limão-cravo, Mamão e Maracujá";
      }
        
      this.router.navigateByUrl
      (`/confirmar-reserva/${this.media}/${this.plantas}`)
    }
}
