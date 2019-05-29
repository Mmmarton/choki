import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChocolatePreview } from '../models';

@Component({
  selector: 'choki-chocolate-list',
  templateUrl: './chocolate-list.component.html',
  styleUrls: ['./chocolate-list.component.scss']
})
export class ChocolateListComponent implements OnInit {
  keyword: string;
  chocolates: ChocolatePreview[] = [
    { description: "The finest one out there", image: 'milka', brand: "Milka", rating: 4, type: 'Milk' },
    { description: "Great taste ", image: 'milka', brand: "Milka", rating: 2, type: 'Hazelnut' }
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.keyword = this.activatedRoute.snapshot.paramMap.get('keyword');
  }
}
