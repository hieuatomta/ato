import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RestApiService implements OnInit {
  private SERVER_URL = "http://localhost:8080/";
  postId: any;
  rs :any ;
  constructor(private http: HttpClient) {
   }
  ngOnInit(): void {

  }

  post(url,body){
    let part = this.SERVER_URL + url;
    const headers = { 'Authorization': '' }

    return this.http.post(part, body, { headers }).toPromise()
      .then(res => this.rs = res)
      .catch(err => this.rs = err);
  }

}
