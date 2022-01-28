import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup,} from '@angular/forms';
import { AccountService } from '../account.service';
import { Accountinfo } from '../accountinfo';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm:any = FormGroup;
  datasaved =false;
  message:string;
  status:string;

  constructor(private formBuilder:FormBuilder, private accountService:AccountService) { }

  ngOnInit(): void {
    this.setFormState();
  }

  setFormState():void{
    this.regForm = this.formBuilder.group({
      Name: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      Email:['',[Validators.required, Validators.email]],
      Password:['',[Validators.required, Validators.minLength(8), Validators.maxLength(20),]]
    })
  }

  onSubmit() {
    
    let userinfo = this.regForm.value;
    //console.log(userinfo);
    this.createUserAccount(userinfo);
    this.regForm.reset();
  }
  createUserAccount(accountinfo:Accountinfo ) {
    this.accountService.createaccount(accountinfo).subscribe(
      (resResult)=>{
        let resp =JSON.stringify(resResult);
        console.log(resp);
        this.datasaved = true;
        //this.message = resp;
        this.message = resResult['msg'];
        this.status = resResult['status'];
        this.regForm.reset();
      }
    )
  }
}
