import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-options-page',
  templateUrl: './options-page.page.html',
  styleUrls: ['./options-page.page.scss'],
})
export class OptionsPagePage implements OnInit {

  media:any;
  plantas:any;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.media = this.activateRoute.snapshot.paramMap.get('media');
    this.plantas = this.activateRoute.snapshot.paramMap.get('plantas');
  }

}
