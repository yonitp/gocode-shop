import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CATEGORIES, SORTS } from '../mock-product';
import { Sorts } from '../sort';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() filterCatChange = new EventEmitter<string>();
  @Output() sortByChange = new EventEmitter<number>();

  sortList: Sorts[] = SORTS;
  categories = CATEGORIES;
  selectCat = '';
  selectSort: number = 0;

  constructor() {}

  ngOnInit(): void {}

  filterCat() {
    this.filterCatChange.emit(this.selectCat);
  }

  sortBy() {
    this.sortByChange.emit(this.selectSort);
  }
}
