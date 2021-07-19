import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxyHttpService {

  constructor(private http:HttpClient) { }

  public get(apiUrl:string):Observable<any> {
    return this.http.get(apiUrl);
  }

  public post(apiUrl:string):Observable<any> {
    var header = new HttpHeaders();
    header.set("content-type","application/json");
    return this.http.post(apiUrl,{headers:header});
  }
}
