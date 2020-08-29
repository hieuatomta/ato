import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRoute} from '@angular/router';
import {RestApiService} from './rest-api.service';

@Injectable()
export class AuthGuardAuthsService implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(): boolean {
    if (location.pathname === '/auths' || location.pathname === '/auths/login' ||
                location.pathname === '/mic/auths/login') {
      localStorage.clear();
      return true;
    }
    return true;
  }
}
