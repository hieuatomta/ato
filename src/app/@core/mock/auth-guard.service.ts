import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRoute} from '@angular/router';
import {RestApiService} from './rest-api.service';
import {NbMenuService} from '@nebular/theme';
import {environment} from '../../../environments/environment.prod';

@Injectable()
export class AuthGuardService implements CanActivate {

  LIST_WHITE = [
    // '/' + environment.app_code + '/pages/home',
    //             '/', '/' + environment.app_code + '/pages',
    //             '/pages',
    //             '/pages/home', '/' + environment.app_code,
    //             '/' + environment.app_code + '/'
  ];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: RestApiService,
              private menuService: NbMenuService) {
  }

  canActivate(): boolean {
    const token = localStorage.getItem('httpHeaders');
    if (token === undefined || token === null || token === '') {
      localStorage.clear();
      this.router.navigate(['/auths/login']);
      return false;
    }
    let checkRole = false;
    const obj = JSON.parse(localStorage.getItem('objects'));
    try {
      if (obj === undefined || obj === null || obj === '') {
        localStorage.clear();
        this.router.navigate(['/auths/login']);
        return false;
      }
      if (this.LIST_WHITE.includes(location.pathname)) {
        this.menuService.navigateHome();
        return true;
      }
      // if (location.pathname === '/' + environment.app_code + '/auths/login'
      // || location.pathname === '/auths/login') {
      //   localStorage.clear();
      //   this.router.navigate(['/auths/login']);
      //   return false;
      // }
      for (let i = 0; i < obj?.length; i++) {
        if (obj[i].link === location.pathname) {
          checkRole = true;
        }
      }
      if (!checkRole) {
        this.router.navigate(['/pages/home']);
        return false;
      }
    } catch (e) {
      localStorage.clear();
      this.router.navigate(['/auths/login']);
      return false;
    }
    return true;
  }
}
