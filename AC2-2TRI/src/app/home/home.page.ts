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
  media = 0;
  plantas = "";
  /*  
  Romã: -10°C a 45°C
  Uva: -15°C a 40°C
  Figo: -15°C a 40°C
  Kiwi: -10°C a 40°C
  Abacate: -2°C a 38°C
  Manga: -2°C a 38°C
  Laranja: -2°C a 38°C
  Tangerina: -2°C a 38°C
  Mamão: 10°C a 38°C
  Pomelo: 10°C a 38°C
  Carambola: 15°C a 38°C
  Morango: -10°C a 30°C
  Limão: 10°C a 35°C
  Limão Siciliano: 10°C a 35°C
  Limão Tahiti: 10°C a 35°C
  Limão-cravo: 10°C a 35°C
  Maracujá: 10°C a 35°C
  Banana: 12°C a 35°C
  Ananás (abacaxi): 15°C a 32°C
  */


  constructor(public router: Router) {}
    indicarPlantas(){
      this.media = (this.mes1 + this.mes2 + this.mes3 + this.mes4) / 4;
      if(this.media < -15){
        this.plantas="Nenhuma planta cadastrada em nossos dados sobrevive a esse frio";
      }else if(this.media >= -15 && this.media < -10){
        this.plantas="Nós recomendamos Uva e Figo";
      }else if(this.media >= -10 && this.media < -2){
        this.plantas="Nós recomendamos Uva, Figo, Morango, Kiwi e Romã";
      }else if(this.media >= -2 && this.media < 10){
        this.plantas="Nós recomendamos Uva, Figo, Morango, Kiwi, Romã, Laranja, Tangerina, Abacate e Manga";
      }else if(this.media >= 10 && this.media < 12){
        this.plantas="Nós recomendamos Uva, Figo, Morango, Kiwi, Romã, Laranja, Tangerina, Abacate, Manga, Limão, Pomelo, Limão Siciliano, Limão Tahiti, Limão-cravo, Mamão e Maracujá";
      }else if(this.media >= 12 && this.media < 15){
        this.plantas="Nós recomendamos Uva, Figo, Morango, Kiwi, Romã, Laranja, Tangerina, Abacate, Manga, Limão, Pomelo, Limão Siciliano, Limão Tahiti, Limão-cravo, Mamão, Maracujá, Limão, Limão Siciliano, Limão Tahiti, Limão-cravo, Mamão, Banana e Maracujá";
      }else if(this.media >= 15 && this.media <= 32){
        this.plantas="Nós recomendamos Carambola, Abacaxi, Uva, Figo, Morango, Kiwi, Romã, Laranja, Tangerina, Abacate, Manga, Limão, Pomelo, Limão Siciliano, Limão Tahiti, Limão-cravo, Mamão, Maracujá, Limão, Limão Siciliano, Limão Tahiti, Limão-cravo, Mamão, Banana e Maracujá";
      }else if(this.media > 32 && this.media <= 35){
        this.plantas="Nós recomendamos Carambola, Uva, Figo, Kiwi, Romã, Laranja, Tangerina, Abacate, Manga, Limão, Pomelo, Limão Siciliano, Limão Tahiti, Limão-cravo, Mamão, Maracujá, Limão, Limão Siciliano, Limão Tahiti, Limão-cravo, Mamão, Banana e Maracujá";
      }else if(this.media > 35 && this.media <= 38){
        this.plantas="Nós recomendamos Carambola, Uva, Figo, Kiwi, Romã, Laranja, Tangerina, Abacate, Manga, Pomelo e Mamão";
      }else if(this.media > 38 && this.media <= 40){
        this.plantas="Nós recomendamos Uva, Figo, Kiwi e Romã ";
      }else if(this.media > 40 && this.media <= 45){
        this.plantas="Nós recomendamos Romã";
      }else if(this.media > 45){
        this.plantas="Nenhuma planta cadastrada em nossos dados sobrevive a esse calor";
      }
        
      this.router.navigateByUrl
      (`/options-page/${this.media}/${this.plantas}`)
    }
}
