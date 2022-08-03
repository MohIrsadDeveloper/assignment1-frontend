import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEdit } from './edit.model';
import { EditService } from '../../services/edit.service';
import { ActivatedRoute, Router } from "@angular/router"
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  myEdit : any;
  Id: number = 0;
  userList: any = [];
  constructor(private editService: EditService, private router: ActivatedRoute, private Router : Router, private _toastr : ToastrService) { }
  ngOnInit(): void {
    this.Id = +this.router.snapshot.params['id'];
    this.BeforeEdit()
  }

  onEdit(Form: NgForm) {
    this.editService.editUser(this.Id,Form.value).subscribe(res => {
      this._toastr.info("User Updated Successfully")
      this.Router.navigate(["/dashboard"])
    })
  }
  
  BeforeEdit() {
    this.editService.listUser(this.Id).subscribe(res => {
      this.userList = res;
      this.myEdit = new IEdit(this.userList.data[0].username, this.userList.data[0].email, this.userList.data[0].password, this.userList.data[0].confirmPassword)
    })
  }


}
