import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FacebookService, InitParams} from 'ngx-facebook';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-footer-client',
  styleUrls: ['./client-footer.component.scss'],
  templateUrl: './client-footer.component.html',
})
export class ClientFooterComponent implements OnInit, OnDestroy {
  constructor(private facebookService: FacebookService) {
  }

  topWeb() {

  }

  ngOnInit(): void {
    this.initFacebookService();
    window.addEventListener('scroll', this.scroll, true);

  }

  private initFacebookService(): void {
    const initParams: InitParams = {xfbml: true, version: 'v8.0'};
    this.facebookService.init(initParams);
  }

  hideDiv = true;

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (event): void => {
    const n = event.srcElement.scrollingElement.scrollTop;
    if (n > window.outerHeight) {
      this.hideDiv = false;
    } else {
      this.hideDiv = true;
    }
  };

}

