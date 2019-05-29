import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'choki-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('searchInput') searchInput;
  keyword: string;
  placeholder: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.generatePlaceholder();
  }

  generatePlaceholder() {
    if (this.searchInput.nativeElement.offsetWidth > 475) {
      this.placeholder = 'Search for a chocolate...';
    } else if (this.searchInput.nativeElement.offsetWidth > 390) {
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
