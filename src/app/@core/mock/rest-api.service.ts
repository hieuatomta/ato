import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class RestApiService implements OnInit {
  private SERVER_URL = "http://localhost:8080/";
  postId: any;
  rs :any ;
  constructor(private http: HttpClient) {
   }
  ngOnInit(): void {

  }

  // post(url,body){
  //   let part = this.SERVER_URL + url;
  //   const headers = {
  //     'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoaWV1IiwiZXhwIjoxNTk2OTcxMjI3LCJpYXQiOjE1OTY5Njk0Mjd9.wkX_vF5Kj9SWrIh0dpkeLxNSrh1WpORQaGoTmsr77hJYyF70ysYGzVBIoPD8qUgY8bokoWtgTN6uofmVPgIc-Qd',
  //     'Content-Type':  'application/json',
  //     // 'Access-Control-Allow-Origin': 'http://localhost:8080',
  //     // 'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token',
  //     // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //     // 'Vary': 'Origin',
  //     // 'access-control-allow-credentials': 'true',
  //     // 'mode': "no-cors"
  //    }

  //   return this.http.post(part, body, { headers }).toPromise()
  //     .then(res => this.rs = res)
  //     .catch(err => this.rs = err);
  // }

  setToken() {
    let token;
    try{
      token =  localStorage.getItem('httpHeaders');
      if(token!= null && token!= undefined){
        return token;
      }
    }
    catch{
      token = "";
    }
    return "";

  }

  post(url,loginCred: any): Observable<any> {
    const header1= {'Content-Type':'application/json',
                     'Authorization': this.setToken(),
             };
    const body =  JSON.stringify(loginCred);
    const rs =  this.http.post<any>(url,body,{
        headers: header1,
        observe: 'response',
        responseType: 'json'
    });
    // rs.subscribe(res => {
    //    console.log(res);
    //   if(res.status ==200){
    //     // console.log(res.status);
    //     localStorage.setItem('httpHeaders', res.headers.get('Authorization'));
    //   }
    // },
    // err =>{
    //   console.log(err)
    //   if(err.status == 400){
    //     // console.log(res.status);
    //     window.location.href =  err.body.part;
    //     localStorage.setItem('httpHeaders', "");
    //   }
    // });
    return rs;
}

}
