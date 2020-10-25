import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';

declare const jQuery: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-home-client',
  styleUrls: ['./home-client.component.scss'],
  templateUrl: './home-client.component.html',
})
export class HomeClientComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}
