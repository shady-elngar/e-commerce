import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLogin:boolean=false
constructor(private _AuthService:AuthService){}
ngOnInit(): void{
  this._AuthService.decoded()
  this._AuthService.userToken.subscribe({
    next:()=> {
      console.log(this._AuthService.userToken.getValue())
      if(this._AuthService.userToken.getValue()!==null)
      {
        this.isLogin = true
      }else{
        this.isLogin = false
      }
    }
  })
}
handelLogOut()
{
  this._AuthService.logOut()
}
}
