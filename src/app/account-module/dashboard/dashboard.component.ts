import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isLoggedIn=true;
  
  constructor(private router:Router ) {  }
  onLogOut(){
    localStorage.removeItem('Loginuser');
    this.isLoggedIn=false;
    return this.isLoggedIn;
  }


  ngOnInit(): void {
  }

}
