import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
[x: string]: any;
  productId:any
  allDetails:any
constructor(private _ProductsService:ProductsService, private _ActivatedRoute:ActivatedRoute){}
ngOnInit(): void{
  this._ActivatedRoute.paramMap.subscribe((param)=>
  {
     this.productId=param.get("id")
  })
  this._ProductsService.getProductDetails(this.productId).subscribe((detail)=>
  {
    this.allDetails=detail.data
    console.log(detail.data)
  })
}

}
