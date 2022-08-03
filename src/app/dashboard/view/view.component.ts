import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewService } from 'src/app/services/view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private viewService : ViewService, private router : ActivatedRoute) { }
  Id:number = +this.router.snapshot.params['id'];
  userList:any = [];

  ngOnInit(): void {
    this.fetchUser();

  }
  fetchUser(id:number=this.Id) {
     this.viewService.fetchUser(id)
     .subscribe(res => {
      this.userList = res;
     }) 
  }

}
