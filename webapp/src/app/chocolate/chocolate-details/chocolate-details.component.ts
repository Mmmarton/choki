import { Component, OnInit } from '@angular/core';
import { ChocolatePreview } from '../models';

@Component({
  selector: 'choki-chocolate-details',
  templateUrl: './chocolate-details.component.html',
  styleUrls: ['./chocolate-details.component.scss']
})
export class ChocolateDetailsComponent implements OnInit {
  chocolate: ChocolatePreview = {
    description: 'Great taste',
    image: 'milka',
    brand: 'Milka',
    rating: 2,
    type: 'Hazelnut'
  };

  constructor() {}

  ngOnInit() {}

  get fullStars() {
    if (!this.chocolate) {
      return [];
    }
    return new Array(3);
  }

  get hollowStars() {
    if (!this.chocolate) {
      return [];
    }
    return new Array(5 - 3);
  }
}
