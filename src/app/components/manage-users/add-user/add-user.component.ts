import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

interface Role {
  id:string,
  value: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  roles: Role[] = [
    {id:"admin", value: 'Admin'},
    {id:"manager", value: 'Manager'},
    {id:"employee", value: 'Employee'}
  ];

  constructor(private fb:FormBuilder, private  router:  Router, private userService: UserService) {
    this.userForm = this.fb.group({
      fName:this.fb.control("",Validators.required),
      mName:this.fb.control(""),
      lName:this.fb.control("",Validators.required),
      email:this.fb.control("",Validators.required),
      phone:this.fb.control("",Validators.required),
      role:this.fb.control("",Validators.required),
      password:this.fb.control("",Validators.required),
    })
   }

  ngOnInit(): void {
  }
  addUser(){
    this.userService.addUser(this.userForm.value).subscribe(response=>{
      this.router.navigate(["/manageUser"])
    })
  }
  
  clrFormGroupVal(){
    this.userForm.setValue({
      fname:"",
      mName:"",
      lName:"",
      email:"",
      phone:"",
      role:0,
      password:""      
    })
  }

  clear(){
    this.userForm.reset();
    this.clrFormGroupVal();
  }

}
