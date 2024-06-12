import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmar-reserva',
  templateUrl: './confirmar-reserva.page.html',
  styleUrls: ['./confirmar-reserva.page.scss'],
})
export class ConfirmarReservaPage implements OnInit {
  diaria: any;
  dias: any;
  valor: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.diaria = this.activatedRoute.snapshot.paramMap.get('diaria');
    this.dias = this.activatedRoute.snapshot.paramMap.get('hospedagem');
    this.valor = this.activatedRoute.snapshot.paramMap.get('valor');
  }
  confirmarHospedagem() {
    this.router.navigateByUrl(`reserva/${this.valor}`);
  }
}
