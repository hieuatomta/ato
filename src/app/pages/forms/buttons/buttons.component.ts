import { Component } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-buttons',
  styleUrls: ['./buttons.component.scss'],
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent {
  constructor(private http: HttpClient){

  }
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
  myFunction(){

      // const headers = { 'Authorization': '' }
      const body ={
      }
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');

          if(null !=localStorage.getItem('httpHeaders')){
            let token = localStorage.getItem('httpHeaders');
            headers =  headers.set('Authorization',token );
          }
       this.http.post<any>('http://localhost:8080/test3/login1', {}, { headers }).subscribe(data => {
          // this.menu= (data.listObjects);
          console.log(data);

      })


  }
}
