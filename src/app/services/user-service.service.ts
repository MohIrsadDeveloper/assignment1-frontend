import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  registerUrl = "http://localhost:4000/addUser";

  constructor(private http : HttpClient) { }

  registerUser(user : any[]) : Observable<any[]>{
    return this.http.post<any[]>(this.registerUrl, user)
  }


}
