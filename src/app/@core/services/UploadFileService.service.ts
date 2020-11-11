import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  constructor(private http: HttpClient) {
  }

  //
  // upload(file: File): Observable<HttpEvent<any>> {
  //   const formData: FormData = new FormData();
  //
  //   formData.append('file', file);
  //
  //   const req = new HttpRequest('POST', `${environment.apiUrl}/upload`, formData, {
  //     reportProgress: true,
  //     responseType: 'json'
  //   });
  //
  //   return this.http.request(req);
  // }

  public upload(file: File): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    return this.http.post<any>(`${environment.apiUrl}/upload`, formData, {
      observe: 'response'
    });
  }

  getFiles(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/files`);
  }
}
