import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private http:HttpClient) { }

  userUrl = `http://localhost:4000/listUser/`

  fetchUser(id:number):Observable<any[]>{
    return this.http.get<any[]>(this.userUrl+id)
  }
}
