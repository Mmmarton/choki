import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ChocolatePreview } from '../models';

@Component({
  selector: 'choki-chocolate-preview',
  templateUrl: './chocolate-preview.component.html',
  styleUrls: ['./chocolate-preview.component.scss']
})
export class ChocolatePreviewComponent implements OnInit {
  transforms: string;
  showDetails = false;

  @Input()
  chocolate: ChocolatePreview;

  constructor() {}

  ngOnInit() {
    this.transforms = `rotate(${this.random(
      -10,
      10
    )}deg) translateY(${this.random(-10, 15)}px)`;
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  showMore(event) {
    event.stopPropagation();
  }

  get fullStars() {
    if (!this.chocolate) {
      return [];
    }
    return new Array(this.chocolate.rating);
  }

  get hollowStars() {
    if (!this.chocolate) {
      return [];
    }
    return new Array(5 - this.chocolate.rating);
  }

  private random(min, max) {
    return min + Math.random() * (max - min + 1);
  }
}
