import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken = new BehaviorSubject(null);
  enCoded:any
  deCoded:any
  
  constructor(private _HttpClient:HttpClient , private _Router:Router) {}
logOut()
{
  localStorage.removeItem("userToken")
  this.userToken.next(null),
  this._Router.navigate(['/login']);
}
  decoded()
  {
     this.enCoded = JSON.stringify( localStorage.getItem("userToken"))
     this.deCoded = jwtDecode( this.enCoded)
     this.userToken.next(this.deCoded)
     console.log(this.userToken)
     console.log(this.enCoded)
  }

  register(userData:object):Observable<any>
{
  return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",userData )
}
  login(userData:object):Observable<any>
{
  return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",userData )
}
  
}
