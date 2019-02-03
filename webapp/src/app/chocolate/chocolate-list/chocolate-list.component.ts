import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'choki-chocolate-list',
  templateUrl: './chocolate-list.component.html',
  styleUrls: ['./chocolate-list.component.scss']
})
export class ChocolateListComponent implements OnInit {
  keyword: string;
  previews = [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.keyword = this.activatedRoute.snapshot.paramMap.get('keyword');
  }
}
