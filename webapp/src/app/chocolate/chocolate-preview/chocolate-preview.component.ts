import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'choki-chocolate-preview',
  templateUrl: './chocolate-preview.component.html',
  styleUrls: ['./chocolate-preview.component.scss']
})
export class ChocolatePreviewComponent implements OnInit {
  transforms: string;
  showDetails = false;
  rating: number;

  constructor() {}

  ngOnInit() {
    this.transforms = `rotate(${this.random(
      -10,
      10
    )}deg) translateY(${this.random(-10, 15)}px)`;
    this.rating = Math.floor(this.random(0, 5));
  }

  openDetails() {
    this.showDetails = true;
  }

  closeDetails(event) {
    event.stopPropagation();
    this.showDetails = false;
  }

  get fullStars() {
    return new Array(this.rating);
  }

  get hollowStars() {
    return new Array(5 - this.rating);
  }

  private random(min, max) {
    return min + Math.random() * (max - min + 1);
  }
}
