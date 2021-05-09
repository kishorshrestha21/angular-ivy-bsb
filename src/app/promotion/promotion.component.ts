import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  constructor() {}

  isShow: boolean = false;

  onLoc() {
    this.isShow = !this.isShow;
  }
  ngOnInit() {}
}
