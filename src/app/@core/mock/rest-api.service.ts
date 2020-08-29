import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.prod';


@Injectable()
export class RestApiService implements OnInit {
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  setToken() {
    let token;
    try {
      token = localStorage.getItem('httpHeaders');
      if (token != null && token !== undefined) {
        return token;
      }
    } catch {
      token = '';
    }
    return '';

  }

  post(url, data: any): Observable<any> {
    const header1 = {
      'Content-Type': 'application/json',
      'Authorization': this.setToken(),
    };
    const body = JSON.stringify(data);
    const rs = this.http.post<any>(`${environment.api_url}${url}`, body, {
      headers: header1,
      observe: 'response',
      responseType: 'json',
    });
    return rs;
  }

  get(url): Observable<any> {
    const header = {
      'Content-Type': 'application/json',
      'Authorization': this.setToken(),
    };
    const rs = this.http.get<any>(`${environment.api_url}${url}`, {
      headers: header,
      observe: 'response',
      responseType: 'json',
    });
    return rs;
  }

}
