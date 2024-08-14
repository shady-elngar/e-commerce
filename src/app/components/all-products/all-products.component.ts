import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { CartLogicService } from 'src/app/services/cart-logic.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit  {
  productes:any[]=[]
  subCategories:any[]=[]
  

constructor(private _ProductsService:ProductsService , private _CategoriesService:CategoriesService , private _CartLogicService:CartLogicService){
 
}
ngOnInit(): void{
 this._ProductsService.getAllProduct().subscribe((res)=>
    {
      this.productes=res.data
      
    })
    this._CategoriesService.getCtegories().subscribe((res)=>
      {
        this.subCategories=res.data
        
      })
      

}
addToCart(productId:string)
{
  this._CartLogicService.addToCart(productId).subscribe((res)=>
  {
    console.log(res)
    this._CartLogicService.numOfCartItems.next(res.numOfCartItems)
    
  })
}

}
