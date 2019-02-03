import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'choki-chocolate-list',
  templateUrl: './chocolate-list.component.html',
  styleUrls: ['./chocolate-list.component.scss']
})
export class ChocolateListComponent implements OnInit {
  keyword: string;
  previews = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.keyword = this.activatedRoute.snapshot.paramMap.get('keyword');
  }
}
