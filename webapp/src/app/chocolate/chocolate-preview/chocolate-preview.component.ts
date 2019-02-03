import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'choki-chocolate-preview',
  templateUrl: './chocolate-preview.component.html',
  styleUrls: ['./chocolate-preview.component.scss']
})
export class ChocolatePreviewComponent implements OnInit {
  angle: string;

  constructor() {}

  ngOnInit() {
    this.angle = `rotate(${this.random(-15, 15)}deg)`;
  }

  private random(min, max) {
    return min + Math.random() * (max - min + 1);
  }
}
