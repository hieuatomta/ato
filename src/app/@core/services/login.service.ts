import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {LoginProgramModel} from '../model/login-program.model';

type EntityResponseType = HttpResponse<LoginProgramModel>;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(protected http: HttpClient) {

  }
  login(login: LoginProgramModel): Observable<EntityResponseType> {
    return this.http.post<LoginProgramModel>(`${environment.apiUrl}/login`, login, {observe: 'response'});
  }

  authenticationcate(authenticationcate: any): Observable<EntityResponseType> {
    return this.http.post<LoginProgramModel>(`${environment.apiUrl}/authenticationcate`, authenticationcate, {observe: 'response'});
  }

  changePass(changePass: LoginProgramModel): Observable<EntityResponseType> {
    return this.http.post<LoginProgramModel>(`${environment.apiUrl}/changePass`, changePass, {observe: 'response'});
  }
  sendSimpleEmail(sendSimpleEmail: LoginProgramModel): Observable<EntityResponseType> {
    return this.http.post<LoginProgramModel>(`${environment.apiUrl}/sendSimpleEmail`, sendSimpleEmail, {observe: 'response'});
  }

  delete(id: any) {
    return this.http.delete(`${environment.apiUrl}/config-menu-items/${id}`);
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<any>(`${environment.apiUrl}/config-menu-items/allInfo/${id}`, {observe: 'response'});
  }
}
