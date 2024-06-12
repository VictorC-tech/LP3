import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {

  valor:any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.valor= this.activatedRoute.snapshot.paramMap.get('valor')
  }

}
