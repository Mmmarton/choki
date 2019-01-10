import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'choki-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  keyword: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  keywordChanged(event: any) {
    if (event.key === 'Enter') {
      this.router.navigate(['chocolate/list/', this.keyword ? this.keyword : '']);
    }
  }
}
