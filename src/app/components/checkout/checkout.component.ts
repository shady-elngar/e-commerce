import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartLogicService } from 'src/app/services/cart-logic.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  
  url:string=""
  constructor(private _CartLogicService:CartLogicService){
    
  }
shippingAddress:FormGroup = new FormGroup({
  details:new FormControl(null),
  phone:new FormControl(null),
  city:new FormControl(null)
})
handelCheck(shippingAddress:FormGroup)
{
  this._CartLogicService.checkout(shippingAddress.value).subscribe({
    next:(res)=>{
      console.log(res)
      this.url = res.session.url
      window.location.href = this.url
    }
  })
console.log(shippingAddress.value)
}
}
