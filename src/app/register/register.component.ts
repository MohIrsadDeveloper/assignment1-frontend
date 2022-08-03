import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegiter } from './register.model';
import { RegisterService } from '../services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router) { }
  userList:any = [];

  ngOnInit(): void {
  }

  myUser = new IRegiter("afzal", "afzal@gmail.com", "afzal", "afzal")

  onRegister(Form: NgForm) {
    this.registerService.registerUser(Form.value)
      .subscribe((res) => {
        this.userList = res;      
          Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )       
      })
    this.router.navigate(["/login"])
  }

}
