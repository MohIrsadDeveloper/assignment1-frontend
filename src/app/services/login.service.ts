import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUrl = "http://localhost:4000/adminLogin";
  infoUrl = "http://localhost:4000/userInfo"

  loginUser(user: any[]): Observable<any[]> {
    return this.http.post<any[]>(this.loginUrl, user)
  }
  getUserInfo(token:string) {
    return this.http.get(this.infoUrl, {headers:{'x-access-token': token}})
  }
}
