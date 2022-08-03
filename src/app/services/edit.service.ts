import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(private http: HttpClient) { }

  editUserUrl = `http://localhost:4000/updateUser?id=`
  listUserUrl = `http://localhost:4000/listUser/`
  editUser(id: number,user:any):Observable<any[]> {
    return this.http.patch<any[]>(this.editUserUrl+id, user)
  }
  listUser(id:number):Observable<any[]>{
    return this.http.get<any[]>(this.listUserUrl+id)
  }
}
