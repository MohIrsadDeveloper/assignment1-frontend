import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userList: any = [];

  constructor(private dashboardService: DashboardService, private router: Router, private _toastr : ToastrService) { }
  
  ngOnInit(): void {
    this.fetchUser()
  }

  fetchUser() {
    this.dashboardService.FetchUser().subscribe(res => {
      this.userList = res;
    })
  }

  onDelete(id: number) {
    this.dashboardService.deleteUser(id).subscribe(res => {
      console.log(res);
      this._toastr.warning("User Deleted Successfully", "Delete User")
      this.fetchUser()
    })
  }

  onEdit(id: number) {
    this.router.navigate([`/dashboard/edit/${id}`])
    
  }
  onView(id : number) {
    this.router.navigate([`/dashboard/view/${id}`])
    
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }


}
