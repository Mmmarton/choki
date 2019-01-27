import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'choki-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  keyword: string;
  placeholder: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.generatePlaceholder();
  }

  @HostListener('window:resize')
  generatePlaceholder() {
    if (window.innerWidth > 1660) {
      this.placeholder = 'Search for a chocolate...';
    } else if (window.innerWidth > 1375) {
      this.placeholder = 'Browse chocolates...';
    } else {
      this.placeholder = 'Chocolates...';
    }
  }

  keywordChanged(event: any) {
    if (event.key === 'Enter') {
      this.router.navigate([
        'chocolate/list/',
        this.keyword ? this.keyword : ''
      ]);
    }
  }
}
