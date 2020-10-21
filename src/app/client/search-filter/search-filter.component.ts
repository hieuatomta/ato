import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-search-filter',
  styleUrls: ['./search-filter.component.scss'],
  templateUrl: './search-filter.component.html',
})
export class SearchFilterComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
  }


  ngOnInit(): void {

  }
}
