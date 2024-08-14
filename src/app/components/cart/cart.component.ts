import { Component, OnInit } from '@angular/core';
import { CartLogicService } from 'src/app/services/cart-logic.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  {
  myProduct:any[]=[]
  allRes:any
  
constructor(private _CartLogicService:CartLogicService){}
ngOnInit(): void{
  this._CartLogicService.getLoggedCart().subscribe((res)=>
  {
    this.myProduct = res.data.products
    this.allRes=res
    
    console.log(this.myProduct)
    console.log(this.allRes)
  })
  
}
removeItem(id:string)
{
  this._CartLogicService.removeItem(id).subscribe((res)=>
  {
    this._CartLogicService.getLoggedCart().subscribe((res)=>
    {
      this.myProduct = res.data.products
      this.allRes=res
      this._CartLogicService.numOfCartItems.next(res.numOfCartItems)
    })
    console.log(res)
  })
}
updateQuant(id:string , count:number)
{
  this._CartLogicService.updateQuantity(id,count).subscribe((res)=>
  {
    this._CartLogicService.getLoggedCart().subscribe((res)=>
      {
        this.myProduct = res.data.products
        this.allRes=res
        this._CartLogicService.numOfCartItems.next(res.numOfCartItems)
      })
      console.log(res)
  })
}
 
}


