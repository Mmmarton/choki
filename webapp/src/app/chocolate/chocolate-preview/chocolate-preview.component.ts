import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'choki-chocolate-preview',
  templateUrl: './chocolate-preview.component.html',
  styleUrls: ['./chocolate-preview.component.scss']
})
export class ChocolatePreviewComponent implements OnInit {
  transforms: string;

  constructor() {}

  ngOnInit() {
    this.transforms = `rotate(${this.random(-12, 12)}deg) translateY(${this.random(-10, 20)}px)`;
  }

  private random(min, max) {
    return min + Math.random() * (max - min + 1);
  }
}
