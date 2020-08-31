import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb:FormBuilder, private  router:  Router, private userService: UserService) {
    this.loginForm = this.fb.group({      
      email:this.fb.control("",Validators.required),      
      password:this.fb.control("",Validators.required),
    })
   }

  ngOnInit(): void {
  }
  login(){
    this.userService.userLogin(this.loginForm.value).subscribe(response=>{      
      localStorage.setItem('authToken',response.token);
      localStorage.setItem('userId',response.userId);
      localStorage.setItem('role',response.role);
      localStorage.setItem('name',response.name);
      console.log(localStorage.getItem('name'))
      this.router.navigate(["/"])
      .then(() => {
        window.location.reload();
      });
    },
    error=>{
      alert(`${error.error.message} - Pls Login with correct details or if you are a new user contact admin for new user registration`)
    })
  }

}
