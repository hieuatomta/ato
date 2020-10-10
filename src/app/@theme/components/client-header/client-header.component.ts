import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-header-client',
  styleUrls: ['./client-header.component.scss'],
  templateUrl: './client-header.component.html',
})
export class ClientHeaderComponent implements OnInit, OnDestroy {
  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  hideDiv = true;

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (event): void => {
    const n = event.srcElement.scrollingElement.scrollTop;
    if (n > 40) {
      this.hideDiv = false;
    } else {
      this.hideDiv = true;
    }
  };
}
