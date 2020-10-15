import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FacebookService, InitParams} from 'ngx-facebook';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-footer-client',
  styleUrls: ['./client-footer.component.scss'],
  templateUrl: './client-footer.component.html',
})
export class ClientFooterComponent implements OnInit {
  constructor(private facebookService: FacebookService) {
  }

  ngOnInit(): void {
    this.initFacebookService();
  }

  private initFacebookService(): void {
    const initParams: InitParams = {xfbml: true, version: 'v8.0'};
    this.facebookService.init(initParams);
  }

}

