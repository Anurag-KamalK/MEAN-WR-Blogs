import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';
import { Userloginfo } from '../userloginfo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  datasaved = false;
  message: string;
  status: string;


  loggedIn = false;

  constructor(private formBuilder: FormBuilder, private accountService: AccountService,private router:Router) {  }

  ngOnInit(): void {
    this.setFormState();
  }
  setFormState(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    let userinfo = this.loginForm.value;
    this.userLogin(userinfo);
    this.loginForm.reset();
  }

  userLogin(logininfo: Userloginfo) {
    this.accountService.userlogin(logininfo).subscribe(
      (resResult) => {
        let resp = JSON.stringify(resResult);
        console.log(resp);
        this.datasaved = true;
        this.message = resResult['msg'];
        this.status = resResult['status'];
        if (resResult['status'] == 'success') {
          localStorage.setItem('Loginuser', resp);
          this.loggedIn=true;
          this.router.navigate(['dashboard']);
        } else {
          localStorage.removeItem('Loginuser');
        }
        this.loginForm.reset();
      }
    )
  }
}

