import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userName = localStorage.getItem('name')
  role = localStorage.getItem('role')
  
  constructor(private router:Router) { 
    
  }

  ngOnInit(): void {
    
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    // this.toastr.warning('You have been Logged Out!');
    this.router.navigate([""])
    .then(() => {
      window.location.reload();
    });
  }

  

}
