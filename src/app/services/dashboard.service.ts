import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  fetchUserUrl = "http://localhost:4000/listUser";
  deleteUserUrl = `http://localhost:4000/deleteUser?id=`
  editUserUrl = `http://localhost:4000/updateUser?id=`

  FetchUser(): Observable<any[]> {
    return this.http.get<any[]>(this.fetchUserUrl)
  }

  deleteUser(id: number) {
    return this.http.delete(this.deleteUserUrl + id)
  }

  // editUser(id: number, user:any) {
  //   return this.http.patch(this.editUserUrl + id, user)
  // }
}
