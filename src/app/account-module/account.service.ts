import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accountinfo } from './accountinfo';
import { Userloginfo } from './userloginfo';
 
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url='http://localhost:3000/'
  constructor(private http:HttpClient) { }
  createaccount(accountinfo:Accountinfo):Observable<Accountinfo>{
   
    return this.http.post<Accountinfo>(this.url+'api/register', accountinfo);
  }

  userlogin(logininfo:Userloginfo):Observable<Userloginfo>{
   
    return this.http.post<Userloginfo>(this.url+'api/login',logininfo);
  }
}
