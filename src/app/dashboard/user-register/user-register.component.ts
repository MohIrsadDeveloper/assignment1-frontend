import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/user-service.service';
import { URegiter } from './user-register.model';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router, private _toaster:ToastrService) { }

  ngOnInit(): void {
  }

  myUser = new URegiter("afzal", "afzal@gmail.com", "afzal", "afzal")

  onUserRegister(Form: NgForm) {
    this.registerService.registerUser(Form.value)
      .subscribe((res) => {
        this._toaster.success("User Added Successfully")
        console.log("Data Posted", res);
      })
    this.router.navigate(["/dashboard"])
  }


}
