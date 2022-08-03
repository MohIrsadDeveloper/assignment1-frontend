import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Ilogin } from './login.model';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService, private router:Router) { }
  
userList:any = [];
  ngOnInit(): void {
    
  }

  myUser = new Ilogin("afzal@gmail.com", "afzal");

  onLogin(Form : NgForm){
    this.loginService.loginUser(Form.value)
    .subscribe(res => {
      this.userList = res;
      localStorage.setItem("Token_Number", this.userList.token)
      this.router.navigate(["/dashboard"])
      if (this.userList.auth) {
        Swal.fire({
          icon: 'success',
          title: 'Admin Login Successfully',
        })
      } else {
        this.router.navigate(['/login']);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: this.userList.token,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    })
  }

}
